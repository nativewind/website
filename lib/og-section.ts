// Minimal page-tree node shape we need (matches fumadocs-core's PageTree types)
type TreeNode =
  | { type: 'separator'; name: unknown }
  | { type: 'page'; url: string }
  | { type: 'folder'; index?: { url: string }; children: TreeNode[] };

type PageTree = { children: TreeNode[] };

/**
 * Walk the fumadocs page tree and return the separator label that immediately
 * precedes the given page URL in the sidebar (e.g. "Getting Started").
 *
 * Separator entries in meta.json look like "---Getting Started---"; fumadocs
 * strips the dashes so the node's `name` is simply "Getting Started".
 *
 * Returns null if the page has no preceding separator or is not found.
 */
export function getSectionLabel(tree: PageTree, url: string): string | null {
  let found = false;
  let label: string | null = null;

  function walk(nodes: TreeNode[], lastSep: string | null): void {
    for (const node of nodes) {
      if (found) return;
      if (node.type === 'separator') {
        lastSep = typeof node.name === 'string' ? node.name : lastSep;
      } else if (node.type === 'page') {
        if (node.url === url) {
          found = true;
          label = lastSep;
        }
      } else if (node.type === 'folder') {
        if (node.index?.url === url) {
          found = true;
          label = lastSep;
          return;
        }
        walk(node.children, lastSep);
      }
    }
  }

  walk(tree.children, null);
  return label;
}
