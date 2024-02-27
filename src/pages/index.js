import { Container } from '@/ui/containers';
import Layout from '@/components/layout';

const Home = () => {
  return (
    <Layout>
      <Container className='flex justify-center items-center text-center h-[85vh]'>
        <h1 className='text-4xl font-bold'>
          ion8&apos;s <span className='text-purple-600'>Next.js</span> Starter
        </h1>
      </Container>
    </Layout>
  );
};

export default Home;
