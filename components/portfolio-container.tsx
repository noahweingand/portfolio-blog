import Head from 'next/head';
import { Nav } from './portfolio/index';
import { ToastContainer } from 'react-toastify';
import { UserAgent, useUserAgent } from 'next-useragent';
import 'react-toastify/dist/ReactToastify.css';

type PortfolioProps = {
  children: React.ReactNode;
  background?: string;
  userAgent?: string;
};

export const getBackground = (ua: UserAgent, background?: string) => {
  return ua.isMobile ? (
    <img
      src={background}
      className="filter blur-lg top-0 left-0 w-full h-full object-cover z-0"
    ></img>
  ) : (
    <video
      autoPlay
      loop
      muted={true}
      preload="true"
      playsInline={true}
      className="top-0 left-0 w-full h-full object-cover z-0"
    >
      <source src="/coding.mov" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export const PortfolioContainer: React.FC<PortfolioProps> = ({
  children,
  background,
  userAgent,
}) => {
  const ua = useUserAgent(userAgent ?? '');
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>nowein.dev</title>
        <meta name="author" content="Noah Weingand" />
        <meta name="description" content="Noah Weingand's professional portfolio" />
        <meta
          name="keywords"
          content="nowein,Noah,Weingand,portfolio,projects,technology,tech,coding,programming"
        />
      </Head>
      <main>
        <div
          className="relative p-0 m-0 overflow-hidden"
          style={{ width: '100vw', height: '100vh' }}
        >
          <div className="fixed w-full h-screen min-h-screen bg-cover bg-center bg-fixed">
            <ToastContainer />
            {getBackground(ua, background)}
          </div>
          <Nav />
          {children}
        </div>
      </main>
    </>
  );
};
