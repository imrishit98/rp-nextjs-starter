import { Container, FullWidthContainer } from '@/ui/containers';

import { Button } from '@/ui/buttons';
import { LabelBlock } from '@/components/ui/typography';
import Layout from '@/components/layout';
import { SubmitIcon } from '@/svgs/icons';
import { TwoColsWImg } from '@/components/ui/grids';
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
      {/* Typography */}
      <FullWidthContainer className='text-center bg-purple-50 py-10 lg:py-20'>
        <Container>
          <LabelBlock className='mb-10'>Duis ultricies eget nunc adipiscing</LabelBlock>

          <h1 className='display-lg font-semibold mb-4 text-neutral-n700'>
            Aenean integer amet ultricies nec dictumst sed
          </h1>

          <h4 className='title-lg font-medium text-neutral-n600'>
            Risus sed ac purus sed etiam. Donec commodo velit sed a luctus malesuada
            maecenas urna viverra dolor id tempus lorem quis.
          </h4>
          <div className='flex gap-6 mt-10 justify-center flex-col sm:flex-row'>
            <Button
              type='link'
              link='/'
              label='Accumsan elementum'
              variant='primary'
              className='button-lg'
            />
            <Button
              type='link'
              link='/'
              label='Consectetur bibendum'
              variant='secondary'
              className='button-lg'
            />
          </div>
        </Container>
      </FullWidthContainer>

      {/*  section #2 */}

      <FullWidthContainer className='text-center'>
        <Container className='py-10'>
          <h2 className='display-md text-purple-p900 font-semibold'>
            Egestas integer dolor quis netus et leo sed
          </h2>

          <p className='body-md text-neutral-n600'>
            Consequat fermentum at varius nullam sagittis hendrerit auctor neque. Enim
            risus lectus mattis suspendisse. Euismod eu sem eu sagittis faucibus. Sed
            consectetur vulputate ornare blandit morbi. Et varius eros maecenas risus
            imperdiet.
          </p>

          <div className='grid grid-cols-1 gap-10 xl:grid-cols-3 my-20'>
            <div className='bg-purple-50 rounded-lg px-5 py-12'>
              <LabelBlock className='mb-5'>Step 01</LabelBlock>
              <h5 className='title-md font-medium mb-5'>
                Sagittis lacus vitae mus at aliquam lacus id ut sed nunc.
              </h5>

              <p className='body-md text-neutral-n600'>
                Donec auctor nunc tristique diam ullamcorper quam mauris pellentesque
                adipiscing. Diam viverra nec volutpat faucibus mattis. Accumsan mollis
                tempus sollicitudin mi nisi dignissim maecenas porttitor vulputate.
                Elementum sit et venenatis a nunc et.
              </p>
            </div>

            <div className='bg-purple-50 rounded-lg px-5 py-12'>
              <LabelBlock className='mb-5'>Step 02</LabelBlock>
              <h5 className='title-md font-medium mb-5'>
                Sagittis lacus vitae mus at aliquam lacus id ut sed nunc.
              </h5>

              <p className='body-md text-neutral-n600 font-normal'>
                Eget vitae odio amet in id condimentum morbi morbi bibendum. Elit id
                ullamcorper maecenas mauris nunc. Viverra sit erat risus in aliquet a
                quis sit. Ornare parturient laoreet quisque elementum pulvinar phasellus
                elit. Vulputate tristique facilisis congue aliqu habitant nunc.
              </p>
            </div>

            <div className='bg-purple-50 rounded-lg px-5 py-12'>
              <LabelBlock className='mb-5'>Step 03</LabelBlock>
              <h5 className='title-md font-medium mb-5'>
                Egestas sollicitudin nam orci leo integer justo in in egestas.
              </h5>

              <p className='body-md text-neutral-n600 font-normal'>
                Ullamcorper ut non tortor euismod sed velit sed aliquam. Amet amet
                posuere nec quam platea nec. Eros nec eget elit nullam sodales urna
                faucibus. Bibendum dictum tempor sit nam. Ac a a quam scelerisque vivamus
                tristique adipiscing volutpat. Velit lobortis adipiscing egestas.
              </p>
            </div>
          </div>
        </Container>

        {/* section #3 */}

        <Container>
          <TwoColsWImg
            title='Aenean integer amet ultricies nec  dictumst sed'
            subtitle='HAC CONCECTETOR'
            desc='Habitasse pellentesque sed consectetur suspendisse enim. Nibh nisi scelerisque lacus ullamcorper ullamcorper lacus. A at elementum adipiscing elit risus eget. Enim tempor nulla tellus dignissim id mi. Molestie sit diam egestas lectus sollicitudin.'
            imgSrc='/images/Pexels Photo by Kristina Paukshtite.png'
            imgAlt=''
            imgW={500}
            imgH={500}>
            <Button
              type='link'
              link='/'
              label='Get started now for FREE!'
              variant='primary'
              className='button-lg'
            />
          </TwoColsWImg>

          <TwoColsWImg
            title='Aliquam nisi id ut ac aliquam pellentesque dictumst'
            subtitle='FERMENTUM SED ADIT'
            desc='Lorem eu sollicitudin euismod blandit consectetur sit feugiat. Est pellentesque enim bibendum odio purus parturient. Viverra cursus ullamcorper sagittis nec sodales dolor id. Risus aliquam placerat.'
            imgSrc='/images/Pexels Photo by Kristina Paukshtite.png'
            imgAlt=''
            imgW={500}
            imgH={500}
            imgOnTheLeft
            className='mt-28'>
            {' '}
            <Button
              type='link'
              link='/'
              label='Get started now for FREE!'
              variant='primary'
              className='button-lg'
            />
          </TwoColsWImg>
        </Container>
      </FullWidthContainer>

      <FullWidthContainer className='bg-purple-p50 text-center'>
        <Container>
          <h2 className='display-lg font-semibold text-neutral-n700 mb-4'>
            Egestas enim volutpat netus facilisis sed dolor.
          </h2>
          <h4 className='title-lg text-neutral-n600 font-medium'>
            Ut quis quam senectus vulputate ut aliquam arcu gravida at. Varius at justo
            consectetur quam vitae proin ut sed eu. Commodo natoque.
          </h4>
        </Container>
      </FullWidthContainer>
    </Layout>
  );
};

export default StyleGuideNew;
