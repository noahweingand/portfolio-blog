import Head from 'next/head';
import { Nav } from './portfolio/index';

type PortfolioProps = {
  children: React.ReactNode;
};

export const PortfolioContainer: React.FC<PortfolioProps> = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>nowein.dev</title>
        <meta name="author" content="name" />
        <meta name="description" content="description here" />
        <meta name="keywords" content="keywords,here" />
      </Head>
      <main>
        <div
          className="relative p-0 m-0 overflow-hidden"
          style={{ width: '100vw', height: '100vh' }}
        >
          <div className="fixed w-full h-screen min-h-screen bg-cover bg-center bg-fixed">
            <video
              autoPlay
              loop
              muted
              preload="true"
              className="top-0 left-0 w-full h-full object-cover z-0"
            >
              <source src="/coding.mov" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <Nav />
          {children}
        </div>
      </main>
    </>
  );
};
