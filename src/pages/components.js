import Layout from '../components/layout';
import { SecondaryButton, PrimaryButton } from '../components/ui/buttons';
import { Container } from '../components/ui/containers';
import { SubmitIcon } from '../components/ui/icons';
import { H1 } from '../components/ui/typography';

const Components = () => {
  return (
    <Layout>
      <Container className='flex justify-center items-center text-center h-[40vh]'>
        <H1>
          ion8&apos;s <span className='text-cobalt'>Next.js</span> Starter
          Template
        </H1>
      </Container>
      <Container>
        <div className='grid grid-cols-4 gap-4'>
          <div>
            <PrimaryButton link='#' label='Primary Button' />
          </div>
          <div>
            <SecondaryButton link='#' label='Left Icon'>
              <SubmitIcon />
            </SecondaryButton>
          </div>{' '}
          <div>
            <PrimaryButton link='#' label='Right Icon' iconOnTheRight>
              <SubmitIcon />
            </PrimaryButton>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default Components;
