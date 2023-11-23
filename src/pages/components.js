import Layout from '../components/layout';
import { SecondaryButton, PrimaryButton } from '../components/ui/buttons';
import { Container } from '../components/ui/containers';
import { Form } from '../components/ui/form';
import { SubmitIcon } from '../components/ui/icons';
import { Gallery, Testimonials } from '../components/ui/sliders';
import { H1, H4, LgText } from '../components/ui/typography';

const title = 'Components Page';

const Components = () => {
  return (
    <Layout
      seoTitle={title}
      seoDesc=''>
      <Container className='text-center h-[50vh] flex'>
        <div>
          <H1 className='mb-4'>
            ion8&apos;s <span className='text-cobalt'>Next.js</span> Starter Template
          </H1>
          <LgText className='md:px-20 lg:px-40'>
            A boilerplate with all the necessary and common styles and components for
            your needs.
          </LgText>
        </div>
      </Container>
      <Container className='items-center'>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
          <div>
            {/* Primary Button without icon */}
            <PrimaryButton
              link='#'
              label='Primary Button'
            />
          </div>
          <div>
            {/* Secondary Button with the icon on the left by default */}
            <SecondaryButton
              link='#'
              label='Left Icon'
              hasIcon>
              <SubmitIcon />
            </SecondaryButton>
          </div>{' '}
          <div>
            {/* Primary Button with the icon on the right using the prop iconOnTheRight */}
            <PrimaryButton
              link='#'
              label='Right Icon'
              hasIcon
              iconOnTheRight>
              <SubmitIcon />
            </PrimaryButton>
          </div>
        </div>
      </Container>

      <Container>
        <div className='mb-6'>
          <hr class='h-px my-8 bg-gray-200 border-0 dark:bg-gray-700' />

          <H4>Form Elements with Validation</H4>
          <hr class='h-px my-8 bg-gray-200 border-0 dark:bg-gray-700' />
        </div>
        <Form />
      </Container>

      <Container>
        <div className='mb-6'>
          <hr class='h-px my-8 bg-gray-200 border-0 dark:bg-gray-700' />

          <H4>Image Gallery</H4>
          <hr class='h-px my-8 bg-gray-200 border-0 dark:bg-gray-700' />
        </div>
        <Gallery />
      </Container>

      <Container>
        <div className='mb-6'>
          <hr class='h-px my-8 bg-gray-200 border-0 dark:bg-gray-700' />

          <H4>Testimonials</H4>
          <hr class='h-px my-8 bg-gray-200 border-0 dark:bg-gray-700' />
        </div>
        <Testimonials />
      </Container>
    </Layout>
  );
};

export default Components;