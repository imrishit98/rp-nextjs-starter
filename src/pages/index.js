import Layout from '../components/layout';

const Home = () => {
  return (
    <Layout>
      <div className='flex justify-center items-center h-[85vh]'>
        <h1 className='text-4xl font-bold'>
          Rishit Patel&apos;s <span className='text-purple-600'>Next.js</span>{' '}
          Starter
        </h1>
      </div>
    </Layout>
  );
};

export default Home;
