import fs from 'fs';
import path from 'path';
import { Container } from '@/components/ui/containers';
import { H1 } from '@/components/ui/typography';
import { siteName } from '../../../site-config';
import { Markdown } from 'react-markdown';

async function getReadmeContent() {
  const readmePath = path.join(process.cwd(), 'README.md');
  const content = await fs.promises.readFile(readmePath, 'utf8');
  return content;
}

export default async function AboutPage() {
  const readmeContent = await getReadmeContent();

  return (
    <Container className='py-8'>
      <H1 className='mb-4'>About {siteName}</H1>
      <article className='prose dark:prose-invert max-w-none'>
        <Markdown>{readmeContent}</Markdown>
      </article>
    </Container>
  );
}
