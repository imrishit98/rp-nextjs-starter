import { Container } from '@/components/ui/containers';
import { H1 } from '@/components/ui/typography';

const Home = () => {
  return (
    <Container className='flex justify-center items-center text-center h-[85vh]'>
      <H1>
        Rishit Patel&apos;s <span className='text-purple-600'>Next.js</span> Starter
      </H1>
    </Container>
  );
};

export default Home;
