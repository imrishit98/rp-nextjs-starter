import fs from 'fs';
import path from 'path';
import { Container } from '@/components/ui/containers';
import { H1 } from '@/components/ui/typography';
import { siteName } from '../../../site-config';

async function getReadmeContent() {
  const readmePath = path.join(process.cwd(), 'README.md');
  const content = await fs.promises.readFile(readmePath, 'utf8');

  // Basic markdown to HTML conversion
  const html = content
    // Convert headers
    .replace(/^### (.*$)/gm, '<h3>$1</h3>')
    .replace(/^## (.*$)/gm, '<h2>$1</h2>')
    .replace(/^# (.*$)/gm, '<h1>$1</h1>')
    // Convert links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
    // Convert bold text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    // Convert italic text
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    // Convert code blocks
    .replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
    // Convert inline code
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    // Convert lists
    .replace(/^\s*[-*+]\s+(.*)/gm, '<li>$1</li>')
    // Convert paragraphs
    .replace(/^(?!<[a-z])/gm, '<p>$&</p>');

  return html;
}

export default async function AboutPage() {
  const readmeContent = await getReadmeContent();

  return (
    <Container className='py-8'>
      <article
        className='prose dark:prose-invert max-w-none'
        dangerouslySetInnerHTML={{ __html: readmeContent }}
      />
    </Container>
  );
}
