import { Edit } from "lucide-react";
import Link from "next/link";

interface EditButtonProps {
  filePath: string;
  version?: 'v2' | 'v4' | 'v5';
  className?: string;
}

export function EditButton({ filePath, version = 'v4', className = "" }: EditButtonProps) {
  let githubUrl: string;
  
  if (version === 'v2') {
    // v2 docs are in a separate repository
    const v2Path = filePath.replace('content/docs/', 'docs/');
    githubUrl = `https://github.com/nativewind/v2-docs/edit/main/${v2Path}`;
  } else {
    // v4 and v5 docs are in the website repository
    githubUrl = `https://github.com/nativewind/website/edit/main/${filePath}`;
  }
  
  return (
    <Link
      href={githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-fd-muted-foreground hover:text-fd-foreground bg-fd-card border border-fd-border rounded-md hover:bg-fd-accent transition-colors ${className}`}
    >
      <Edit className="h-4 w-4" />
      Edit
    </Link>
  );
}
