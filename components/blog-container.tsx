import Head from 'next/head';
import { Nav, Footer } from './blog/index';

type BlogProps = {
  children: React.ReactNode;
};

export const BlogContainer: React.FC<BlogProps> = ({ children }) => {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>nowein.dev</title>
        <meta name="author" content="Noah Weingand" />
        <meta name="description" content="blog" />
        <meta
          name="keywords"
          content="nowein,Noah,Weingand,blog,technology,tech,coding,programming,life"
        />
      </Head>
      <body className="bg-gray-100 font-sans leading-normal tracking-normal">
        <Nav />
        {children}
        <Footer />
      </body>
    </div>
  );
};
