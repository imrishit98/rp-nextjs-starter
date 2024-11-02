import fs from 'fs';
import path from 'path';
import { Container } from '@/components/ui/containers';
import { H1 } from '@/components/ui/typography';

async function getReadmeContent() {
  const readmePath = path.join(process.cwd(), 'README.md');
  const content = await fs.promises.readFile(readmePath, 'utf8');
  return content;
}

export default async function AboutPage() {
  const readmeContent = await getReadmeContent();

  return (
    <Container className='py-8'>
      <H1>About</H1>
      <article className='prose dark:prose-invert max-w-none'>
        <div dangerouslySetInnerHTML={{ __html: readmeContent }} />
      </article>
    </Container>
  );
}
