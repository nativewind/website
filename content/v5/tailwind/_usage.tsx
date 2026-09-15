'use client';
import { usePathname } from 'next/navigation';
import { tailwindDocsUrl } from '@/lib/doc-tables';

export default function Usage(props: { href: string }) {
  const slugs = usePathname()
    .split('/')
    .filter((slug) => slug !== '');
  const slug = slugs[slugs.length - 1];
  return (
    <p>
      Please refer to the{' '}
      <a href={tailwindDocsUrl('v5', props.href || slug)}>
        {' '}
        documentation on the Tailwind CSS website{' '}
      </a>
    </p>
  );
}
