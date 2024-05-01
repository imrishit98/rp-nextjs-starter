import { Poppins } from 'next/font/google';

// export fonts that should be loaded
export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
  preload: false,
  display: 'swap',
  fallback: ['system-ui', 'arial'],
});
