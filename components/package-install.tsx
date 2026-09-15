import { Tab, Tabs } from 'fumadocs-ui/components/tabs';
import { CodeBlock, Pre } from 'fumadocs-ui/components/codeblock';
import { installCommands, type InstallOptions } from '@/lib/doc-tables';

export function PackageInstall(props: InstallOptions) {
  const commands = installCommands(props);
  return (
    <Tabs
      groupId={props.version === 'docs' ? 'npm-install' : 'v5-npm-install'}
      items={commands.map((item) => item.manager)}
    >
      {commands.map(({ manager, command }) => (
        <Tab key={manager} value={manager}>
          <CodeBlock data-language="bash">
            <Pre>{command}</Pre>
          </CodeBlock>
        </Tab>
      ))}
    </Tabs>
  );
}
