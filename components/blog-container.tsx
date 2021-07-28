import Head from 'next/head';
import { Nav, ArticleContainer, Footer } from './blog/index';

export const BlogContainer = () => {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>nowein.dev</title>
        <meta name="author" content="name" />
        <meta name="description" content="description here" />
        <meta name="keywords" content="keywords,here" />
      </Head>
      <body className="bg-gray-100 font-sans leading-normal tracking-normal">
        <Nav />
        <ArticleContainer />
        <Footer />
      </body>
    </div>
  );
};
