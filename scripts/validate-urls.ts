import fs from 'fs';
import path from 'path';
import { URL } from 'url';

interface ValidationResult {
  file: string;
  invalidUrls: Array<{
    url: string;
    line: number;
    reason: string;
  }>;
}

async function validateUrl(url: string): Promise<boolean> {
  try {
    const parsedUrl = new URL(url);
    const response = await fetch(url, { 
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; URLValidator/1.0)'
      }
    });
    return response.ok;
  } catch (error) {
    if (error instanceof TypeError && error.message.includes('fetch failed')) {
      console.warn(`Warning: Could not fetch ${url} - Network error`);
    }
    return false;
  }
}

function findMarkdownFiles(dir: string): string[] {
  const files: string[] = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      // Skip node_modules and .git directories
      if (entry.name === 'node_modules' || entry.name === '.git') {
        continue;
      }
      files.push(...findMarkdownFiles(fullPath));
    } else if (entry.isFile() && /\.(md|mdx)$/.test(entry.name)) {
      files.push(fullPath);
    }
  }

  return files;
}

function extractUrlsFromMarkdown(content: string): Array<{ url: string; line: number }> {
  // Match both standard markdown links and MDX-specific syntax
  const urlRegex = /\[([^\]]+)\]\(([^)]+)\)|href=["']([^"']+)["']/g;
  const urls: Array<{ url: string; line: number }> = [];
  const lines = content.split('\n');

  lines.forEach((line, index) => {
    let match;
    while ((match = urlRegex.exec(line)) !== null) {
      // match[2] is for markdown links, match[3] is for href attributes
      const url = match[2] || match[3];
      if (url && !url.startsWith('#')) { // Skip anchor links
        urls.push({
          url,
          line: index + 1,
        });
      }
    }
  });

  return urls;
}

function looksLikeUrl(str: string): boolean {
  // Check if it contains common URL patterns
  return (
    str.includes('.') || // Contains a domain
    str.includes('/') || // Contains a path
    str.includes(':') || // Contains a protocol
    str.includes('@') || // Contains an email
    str.includes('?') || // Contains query parameters
    str.includes('#')    // Contains a hash
  );
}

async function validateMarkdownFile(filePath: string): Promise<ValidationResult> {
  const content = fs.readFileSync(filePath, 'utf-8');
  const urls = extractUrlsFromMarkdown(content);
  const invalidUrls = [];

  for (const { url, line } of urls) {
    // Skip relative paths, local file references, and bare strings that don't look like URLs
    if (
      url.startsWith('./') || 
      url.startsWith('../') || 
      url.startsWith('/') ||
      !looksLikeUrl(url)
    ) {
      continue;
    }
    
    const isValid = await validateUrl(url);
    if (!isValid) {
      invalidUrls.push({
        url,
        line,
        reason: 'URL is not accessible',
      });
    }
  }

  return {
    file: filePath,
    invalidUrls,
  };
}

async function main() {
  const rootDir = process.argv[2] || '.';
  
  if (!fs.existsSync(rootDir)) {
    console.error(`Directory ${rootDir} does not exist`);
    process.exit(1);
  }

  const markdownFiles = findMarkdownFiles(rootDir);
  console.log(`Found ${markdownFiles.length} markdown files to validate`);

  let hasInvalidUrls = false;

  for (const file of markdownFiles) {
    try {
      const result = await validateMarkdownFile(file);
      if (result.invalidUrls.length > 0) {
        hasInvalidUrls = true;
        console.log(`\nInvalid URLs found in ${result.file}:`);
        result.invalidUrls.forEach(({ url, line, reason }) => {
          console.log(`  Line ${line}: ${url} - ${reason}`);
        });
      } else {
        console.log(`\nAll URLs in ${result.file} are valid!`);
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error);
    }
  }

  if (hasInvalidUrls) {
    process.exit(1);
  }
}

main().catch(console.error); 