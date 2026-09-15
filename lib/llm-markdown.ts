import { readFile } from 'node:fs/promises';
import { dirname, resolve, relative, sep } from 'node:path';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkMdx from 'remark-mdx';
import remarkGfm from 'remark-gfm';
import remarkStringify from 'remark-stringify';
import {
  compatibilityRows,
  installCommands,
  tailwindDocsUrl,
} from './doc-tables';

// MDX mixes mdast, ESTree and JSX nodes. Keep the conversion at this boundary.
type Node = { type: string; [key: string]: any };
const markdownParser = unified().use(remarkParse).use(remarkGfm);
const parser = unified().use(remarkParse).use(remarkMdx).use(remarkGfm);
const writer = unified().use(remarkGfm).use(remarkStringify, { fences: true });
const text = (value: string): Node => ({ type: 'text', value });
const paragraph = (value: string): Node => ({
  type: 'paragraph',
  children: [text(value)],
});
const plain = (node: Node): string =>
  node.value ?? (node.children ?? []).map(plain).join('');
const origin = 'https://www.nativewind.dev';

export function isPublicDoc(path: string) {
  return !path.split('/').some((part) => part.startsWith('_'));
}

// Evaluate only data expressions used by our MDX partials. Never execute imports,
// function calls or arbitrary JavaScript while exporting documentation.
function evaluate(
  node: Node | undefined,
  props: Record<string, any>,
  raw: string,
): any {
  if (!node) return undefined;
  switch (node.type) {
    case 'Program':
      return evaluate(node.body[0], props, raw);
    case 'ExpressionStatement':
      return evaluate(node.expression, props, raw);
    case 'Literal':
      return node.value;
    case 'Identifier':
      if (node.name === 'props') return props;
      if (node.name === 'undefined') return undefined;
      break;
    case 'MemberExpression':
      if (
        node.object.type === 'Identifier' &&
        node.object.name === 'props' &&
        !node.computed
      )
        return props[node.property.name];
      break;
    case 'ArrayExpression':
      return node.elements.flatMap((item: Node) =>
        item.type === 'SpreadElement'
          ? evaluate(item.argument, props, raw)
          : [evaluate(item, props, raw)],
      );
    case 'ConditionalExpression':
      return evaluate(
        evaluate(node.test, props, raw) ? node.consequent : node.alternate,
        props,
        raw,
      );
    case 'LogicalExpression':
      if (node.operator === '||')
        return (
          evaluate(node.left, props, raw) || evaluate(node.right, props, raw)
        );
      if (node.operator === '&&')
        return (
          evaluate(node.left, props, raw) && evaluate(node.right, props, raw)
        );
      break;
    case 'BinaryExpression':
      if (node.operator === '===')
        return (
          evaluate(node.left, props, raw) === evaluate(node.right, props, raw)
        );
      if (node.operator === '!==')
        return (
          evaluate(node.left, props, raw) !== evaluate(node.right, props, raw)
        );
      break;
    case 'JSXElement':
    case 'JSXFragment':
      return { jsx: raw.slice(node.range[0], node.range[1]) };
  }
  throw new Error(`Unsupported MDX expression: ${node.type}`);
}

export async function exportMarkdown(options: {
  root: string;
  file: string;
  url: string;
  version: 'docs' | 'v5';
  pageUrls?: Map<string, string>;
}): Promise<string> {
  const root = resolve(options.root);
  const pageUrls = options.pageUrls ?? new Map();
  function link(url: string, file: string): string {
    if (/^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(url)) return url;
    if (url.startsWith('#')) return `${origin}${options.url}${url}`;
    if (url.startsWith('/')) return `${origin}${url}`;
    const [path, suffix = ''] = url.split(/(?=[#?])/s, 2);
    const target = relative(root, resolve(dirname(file), path))
      .split(sep)
      .join('/');
    const mapped =
      pageUrls.get(target) ??
      pageUrls.get(`${target}.mdx`) ??
      pageUrls.get(`${target}.md`) ??
      pageUrls.get(`${target}/index.mdx`);
    if (mapped) return `${origin}${mapped}${suffix}`;
    // Extensionless links in the docs are URL relative unless they match a source file.
    return new URL(url, `${origin}${options.url}`).href;
  }
  async function expand(
    file: string,
    props: Record<string, any> = {},
    ancestors: string[] = [],
  ): Promise<Node[]> {
    file = resolve(file);
    if (!file.startsWith(`${root}${sep}`))
      throw new Error(`MDX include outside content root: ${file}`);
    if (ancestors.includes(file))
      throw new Error(`Circular MDX include: ${file}`);
    let raw = (await readFile(file, 'utf8')).replace(
      /^---\r?\n[\s\S]*?\r?\n---\r?\n?/,
      '',
    );
    // Legacy .md pages contain HTML comments. Remove comment nodes before MDX
    // parsing, without touching comments in fenced examples.
    const commentRanges: [number, number][] = [];
    const findComments = (node: Node) => {
      if (node.type === 'html' && /^<!--[^]*-->\s*$/.test(node.value))
        commentRanges.push([
          node.position.start.offset,
          node.position.end.offset,
        ]);
      node.children?.forEach(findComments);
    };
    findComments(markdownParser.parse(raw) as Node);
    for (const [start, end] of commentRanges.reverse())
      raw = raw.slice(0, start) + raw.slice(end);
    const tree = parser.parse(raw) as Node;
    const imports = new Map<string, string>();
    for (const node of tree.children)
      if (node.type === 'mdxjsEsm') {
        for (const statement of node.data.estree.body)
          if (statement.type === 'ImportDeclaration') {
            for (const specifier of statement.specifiers)
              imports.set(specifier.local.name, statement.source.value);
          }
      }
    const expression = (node: Node) => evaluate(node.data?.estree, props, raw);
    const attributes = (node: Node) => {
      const result: Record<string, any> = {};
      for (const attr of node.attributes ?? []) {
        if (attr.type === 'mdxJsxExpressionAttribute') {
          // The only supported spread is the partial's incoming props.
          if (attr.value !== '...props')
            throw new Error(`Unsupported MDX spread in ${file}`);
          Object.assign(result, props);
        } else
          result[attr.name] =
            attr.value === null
              ? true
              : typeof attr.value === 'object'
                ? expression(attr.value)
                : attr.value;
      }
      return result;
    };
    const children = async (node: Node): Promise<Node[]> =>
      (await Promise.all((node.children ?? []).map(visit))).flat();
    async function visit(node: Node): Promise<Node[]> {
      if (node.type === 'mdxjsEsm') return [];
      if (
        node.type === 'mdxFlowExpression' ||
        node.type === 'mdxTextExpression'
      ) {
        const value = expression(node);
        if (value?.jsx) return children(parser.parse(value.jsx) as Node);
        return value === undefined || value === false
          ? []
          : [text(String(value))];
      }
      if (
        node.type === 'mdxJsxFlowElement' ||
        node.type === 'mdxJsxTextElement'
      ) {
        const name = node.name;
        if (name === 'CopyInstallationButton' || name === 'CopyMigrationButton')
          return [];
        const attrs = attributes(node);
        if (name === 'include')
          return expand(resolve(dirname(file), plain(node).trim()), props, [
            ...ancestors,
            file,
          ]);
        const imported = imports.get(name);
        if (imported?.startsWith('.') && imported.endsWith('.mdx'))
          return expand(resolve(dirname(file), imported), attrs, [
            ...ancestors,
            file,
          ]);
        if (name === 'PackageInstall')
          return installCommands(attrs).flatMap(({ manager, command }) => [
            paragraph(manager),
            { type: 'code', lang: 'bash', value: command },
          ]);
        if (name === 'CompatibilityTable') {
          const rows = compatibilityRows(attrs);
          const comments = rows.some((row) => row.comment);
          const cell = (children: Node[]) => ({ type: 'tableCell', children });
          return [
            {
              type: 'table',
              children: [
                {
                  type: 'tableRow',
                  children: [
                    'Class',
                    'Support',
                    ...(comments ? ['Comments'] : []),
                  ].map((value) => cell([text(value)])),
                },
                ...rows.map((row) => ({
                  type: 'tableRow',
                  children: [
                    cell([{ type: 'inlineCode', value: row.value }]),
                    cell([text(row.label)]),
                    ...(comments ? [cell([text(row.comment)])] : []),
                  ],
                })),
              ],
            },
          ];
        }
        if (name === 'Usage' && imported?.endsWith('/_usage.tsx')) {
          return [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'link',
                  url: tailwindDocsUrl(
                    options.version,
                    attrs.href || options.url.split('/').at(-1) || '',
                  ),
                  children: [text('Tailwind CSS documentation')],
                },
              ],
            },
          ];
        }
        if (name === 'Pre')
          return [{ type: 'code', lang: 'bash', value: plain(node).trim() }];
        if (name === 'table') {
          const rows: Node[] = [];
          const collect = (n: Node) => {
            if (n.name === 'tr') rows.push(n);
            else n.children?.forEach(collect);
          };
          collect(node);
          return [
            {
              type: 'table',
              children: await Promise.all(
                rows.map(async (row) => ({
                  type: 'tableRow',
                  children: await Promise.all(
                    row.children
                      .filter((n: Node) => n.name === 'td' || n.name === 'th')
                      .map(async (n: Node) => ({
                        type: 'tableCell',
                        children: (await children(n)).flatMap((c) =>
                          c.type === 'paragraph' ? c.children : [c],
                        ),
                      })),
                  ),
                })),
              ),
            },
          ];
        }
        const body = await children(node);
        if (name === 'a')
          return [
            { type: 'link', url: link(attrs.href, file), children: body },
          ];
        if (name === 'img')
          return [
            { type: 'image', url: link(attrs.src, file), alt: attrs.alt ?? '' },
          ];
        if (name === 'Callout')
          return [
            {
              type: 'blockquote',
              children: [
                ...(attrs.title ? [paragraph(attrs.title)] : []),
                ...body,
              ],
            },
          ];
        if (name === 'Tab')
          return [paragraph(attrs.label || attrs.value), ...body];
        if (name === 'p' || name === 'summary')
          return [{ type: 'paragraph', children: body }];
        if (name === 'code')
          return [{ type: 'inlineCode', value: plain(node) }];
        if ([null, 'Tabs', 'CodeBlock', 'details'].includes(name)) return body;
        throw new Error(`Unhandled MDX component ${name} in ${file}`);
      }
      // Inline MDX includes can expand into multiple block nodes. Lift them out
      // of the containing paragraph so headings, lists and fences stay valid.
      if (node.type === 'paragraph') {
        const blocks: Node[] = [];
        let inline: Node[] = [];
        const flush = () => {
          if (inline.length)
            blocks.push({ type: 'paragraph', children: inline });
          inline = [];
        };
        for (const child of await children(node)) {
          if (
            [
              'paragraph',
              'heading',
              'list',
              'code',
              'blockquote',
              'table',
              'thematicBreak',
            ].includes(child.type)
          ) {
            flush();
            blocks.push(child);
          } else inline.push(child);
        }
        flush();
        return blocks;
      }
      if (node.url) node.url = link(node.url, file);
      if (node.children) return [{ ...node, children: await children(node) }];
      return [node];
    }
    return children(tree);
  }
  return writer
    .stringify({
      type: 'root',
      children: await expand(resolve(root, options.file)),
    } as any)
    .trim();
}
