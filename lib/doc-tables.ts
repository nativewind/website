export type InstallOptions = {
  deps?: string[];
  devDeps?: string[];
  exact?: boolean;
  expo?: boolean;
  framework?: string;
  version?: 'docs' | 'v5';
};

// Both the page component and the text exporter use these commands.
export function installCommands(props: InstallOptions) {
  const managers =
    props.version === 'docs'
      ? [
          'npm',
          'yarn',
          'pnpm',
          'bun',
          ...(props.framework === 'expo' ? ['expo'] : []),
        ]
      : [
          ...(props.expo !== false ? ['expo'] : []),
          'npm',
          'yarn',
          'pnpm',
          'bun',
        ];
  return managers.map((manager) => {
    const base = {
      npm: 'npm install',
      yarn: 'yarn add',
      pnpm: 'pnpm add',
      bun: 'bun add',
      expo: 'npx expo install',
    }[manager];
    const exact = props.exact
      ? manager === 'npm' || manager === 'pnpm'
        ? ' --save-exact'
        : ' --exact'
      : '';
    const dev =
      manager === 'npm' || manager === 'pnpm' ? ' --save-dev' : ' --dev';
    return {
      manager,
      command: [
        props.deps?.length ? `${base}${exact} ${props.deps.join(' ')}` : '',
        props.devDeps?.length
          ? `${base}${dev}${exact} ${props.devDeps.join(' ')}`
          : '',
      ]
        .filter(Boolean)
        .join('\n'),
    };
  });
}

export const supportLabels = {
  supported: '✅ Supported',
  experimental: '🧪 Experimental Support',
  native: '📱 Native only',
  partial: '✔️ Partial Support',
  rejected: 'Not supported on native',
  none: '🌐 Web only',
};
export type CompatibilityOptions = Partial<
  Record<keyof typeof supportLabels, (string | [string, string])[]>
>;
export function compatibilityRows(props: CompatibilityOptions) {
  return Object.entries(supportLabels).flatMap(([key, label]) =>
    (props[key as keyof CompatibilityOptions] ?? []).map((value) => ({
      value: Array.isArray(value) ? value[0] : value,
      label,
      comment: Array.isArray(value) ? value[1] : '',
    })),
  );
}

export function tailwindDocsUrl(version: 'docs' | 'v5', slug: string) {
  return `https://${version === 'docs' ? 'v3.' : ''}tailwindcss.com/docs/${slug}`;
}
