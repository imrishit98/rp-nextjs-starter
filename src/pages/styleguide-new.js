import { Container, SectionHeader } from '@/ui/containers';

import { Button } from '@/ui/buttons';
import Display from '@/ui/typography-new';
import Layout from '@/components/layout';
import { SubmitIcon } from '@/svgs/icons';
import { useRouter } from 'next/router';

/**
 * @description - This page is mainly implemented based on the Figma Styleguide - a replication of how the Figma Styleguide looks like.
 * @returns
 */
const StyleGuideNew = () => {
  const router = useRouter();

  const title = 'Styleguide Page';
  // this is the current page url that will be captured
  const pageUrl = router.pathname;
  return (
    <Layout
      seoTitle={title}
      seoDesc=''
      conversionPageUrl={pageUrl}>
      {/* Section header for the page */}
      <Container className='py-10 lg:py-20'>
        <SectionHeader
          title='Styleguide 2.0'
          desc="This styleguide is created to match the Figma's styleguide"
          className='text-center'
        />
      </Container>

      {/* Typography */}

      <Container>
        <Display.Large>
          <h1 className='font-bold'>This is Display Extra Large as h1 bold</h1>
          <br />
          <p className='text-blue-600'>This is Display Extra Large as p in blue</p>
          <br />
        </Display.Large>

        <Display.Medium>
          <h3>This is Display Medium as h3</h3>
          <br />
          <h3 className='font-bold'>This is Display Medium as h3 bold</h3>
          <br />
        </Display.Medium>
      </Container>
    </Layout>
  );
};

export default StyleGuideNew;
