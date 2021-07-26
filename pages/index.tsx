import Head from 'next/head';
import { useStickyHeaderScript } from '../hooks/header';
import { BlogContainer } from '../components/blog-container';

export default function Home() {
  useStickyHeaderScript();

  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Tailwind Starter Template - Minimal Blog: Tailwind Toolbox</title>
        <meta name="author" content="name" />
        <meta name="description" content="description here" />
        <meta name="keywords" content="keywords,here" />
      </Head>

      <BlogContainer />
    </div>
  );
}
