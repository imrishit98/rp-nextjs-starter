import Layout from '../components/layout';
import { SecondaryButton, PrimaryButton } from '../components/ui/buttons';
import { Container } from '../components/ui/containers';
import { SubmitIcon } from '../components/ui/icons';
import { H1 } from '../components/ui/typography';

const Components = () => {
  return (
    <Layout>
      <Container className=' text-center h-[40vh]'>
        <H1>
          ion8&apos;s <span className='text-cobalt'>Next.js</span> Starter
          Template
        </H1>
      </Container>
      <Container className=''>
        <div className='grid grid-cols-4 gap-4'>
          <div>
            {/* Primary Button without icon */}
            <PrimaryButton link='#' label='Primary Button' />
          </div>
          <div>
            {/* Secondary Button with the icon on the left by default */}
            <SecondaryButton link='#' label='Left Icon' hasIcon>
              <SubmitIcon />
            </SecondaryButton>
          </div>{' '}
          <div>
            {/* Primary Button with the icon on the right using the prop iconOnTheRight */}
            <PrimaryButton link='#' label='Right Icon' hasIcon iconOnTheRight>
              <SubmitIcon />
            </PrimaryButton>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default Components;
