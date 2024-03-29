import { Container } from '../components/ui/containers';

const Home = () => {
  return (
    <Container className='flex justify-center items-center text-center h-[85vh]'>
      <h1 className='text-4xl font-bold'>
        Rishit Patel&apos;s <span className='text-purple-600'>Next.js</span>{' '}
        Starter
      </h1>
    </Container>
  );
};

export default Home;
