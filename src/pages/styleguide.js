import {
  BodyText,
  FooterLabel,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  LgText,
  SmText,
  XsText,
} from '@/ui/typography';
import { Container, SectionHeader } from '@/ui/containers';
import { PrimaryButton, SecondaryButton } from '@/ui/buttons';

import Layout from '@/components/layout';
import { SubmitIcon } from '@/ui/icons';

const title = 'StyleGuide Page';

const StyleGuide = () => {
  return (
    <Layout
      seoTitle={title}
      seoDesc=''>
      {/* Section header for the page */}
      <Container className='py-10 lg:py-20'>
        <SectionHeader
          title='Styleguide'
          desc="This styleguide is created to match the Figma's styleguide"
          className='text-center'
        />
      </Container>

      {/* Typography */}
      <Container className='items-center mb-10'>
        <hr class='h-px my-8 bg-gray-200 border-0 dark:bg-gray-700' />
        <div className='grid grid-cols-1 gap-4 md:grid-cols-7'>
          <div className='col-span-3'>
            <H1>Heading 1</H1> <br />
            <H2>Heading 2</H2> <br />
            <H3>Heading 3</H3> <br />
            <H4>Heading 4</H4> <br />
            <H5>Heading 5</H5> <br />
            <H6>Heading 6</H6> <br />
          </div>
          <div className='col-span-4'>
            <BodyText>Paragraph</BodyText>
            <BodyText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut morbi tincidunt
              augue interdum velit euismod. Dolor magna eget est lorem ipsum dolor sit
              amet consectetur. Et tortor consequat id porta nibh venenatis.{' '}
            </BodyText>
            <br />
            <br />

            <LgText>Large Text</LgText>
            <LgText>
              Lobortis elementum nibh tellus molestie nunc non blandit massa enim.
              Pulvinar elementum integer enim neque volutpat ac tincidunt. Convallis
              posuere morbi leo urna.
            </LgText>
            <br />
            <br />
            <SmText>Small Text</SmText>
            <SmText>
              Adipiscing commodo elit at imperdiet dui accumsan sit. Fames ac turpis
              egestas maecenas pharetra convallis posuere morbi. Diam vulputate ut
              pharetra sit amet aliquam id diam. Donec et odio pellentesque diam volutpat
              commodo.{' '}
            </SmText>
            <br />
            <br />
            <XsText>Extra Small Text</XsText>
            <XsText>
              Nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque
              purus. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque.
            </XsText>
          </div>
        </div>
      </Container>

      {/* Buttons */}
      <Container className='items-center mb-10'>
        <hr class='h-px my-8 bg-gray-200 border-0 dark:bg-gray-700' />
        <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
          <div>
            {/* Primary Button without icon */}
            <PrimaryButton
              link='#'
              label='Primary Button'
            />
          </div>
          <div>
            {/* Secondary Button with the icon */}
            <SecondaryButton
              link='#'
              label='Button w/ icon'
              hasIcon>
              <SubmitIcon />
            </SecondaryButton>
          </div>{' '}
        </div>
      </Container>

      {/* Form elements */}

      <Container className='items-center'>
        <hr class='h-px my-8 bg-gray-200 border-0 dark:bg-gray-700' />
        <div className=''>
          <div className='grid grid-cols-1 gap-20 md:grid-cols-2'>
            {/* Input Field - Required - See Form section in Components for validation */}
            <div>
              <label
                htmlFor='reqField'
                className='block mb-1'>
                Required Field
                <span className='inline text-red-700'> *</span>
              </label>
              <input
                className={`px-4 py-3 rounded-md border border-solid border-cobalt w-full focus:border-cyan focus:outline-none `}
                name='reqField'
                type='text'
                placeholder='Required field'
              />
              <XsText className='inline text-red-700'>Enter your first name</XsText>
            </div>
            {/* Optional field */}
            <div>
              <label
                htmlFor='optField'
                className='block mb-1'>
                Optional Field
              </label>
              <input
                className={`px-4 py-3 rounded-md border border-solid border-cobalt w-full focus:border-cyan focus:outline-none `}
                name='optField'
                type='tel'
                placeholder='Optional field'
              />
            </div>

            {/* select boxes */}
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default StyleGuide;
