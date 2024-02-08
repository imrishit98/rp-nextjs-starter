import { H1 } from '@/components/ui/typography';

const videoPathHEVC = '/video/Measure and prove the value of your marketing spend.mp4';
const videoPathWebM = '/video/Measure and prove the value of your marketing spend.webm';
const demoPathHEVC = '/video/transparent-hevc.mp4';
const demoPathWebM = '/video/transparent-vp9.webm';
const bg = '/images/grey-noise-bg.png';

// A page to test transparent video playback
const TransparentVideoTest = () => {
  return (
    <div className='text-cobalt'>
      {[...Array(20)].map((_, i) => (
        <H1
          key={i}
          className='text-deep-blue'>
          below below below below
        </H1>
      ))}
      <video
        autoPlay
        loop
        muted
        playsInline
        className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 w-full h-full'>
        <source
          src={videoPathHEVC}
          type='video/mp4; codecs=hvc1'
        />
        <source
          src={videoPathWebM}
          type='video/webm'
        />
      </video>
      <video
        autoPlay
        loop
        muted
        playsInline
        className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-1 w-full h-full'>
        <source
          src={demoPathHEVC}
          type='video/mp4; codecs=hvc1'
        />
        <source
          src={demoPathWebM}
          type='video/webm'
        />
      </video>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -10,
          backgroundImage: `url(${bg})`,
        }}
      />
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-3/4 h-3/4 bg-transparent flex justify-center items-center'>
        <H1>above above above above</H1>
      </div>
    </div>
  );
};

export default TransparentVideoTest;
