import { Nav, ArticleContainer, Footer } from './blog/index';

export const BlogContainer = () => {
  return (
    <body className="bg-gray-100 font-sans leading-normal tracking-normal">
      <Nav />
      <ArticleContainer />
      <Footer />
    </body>
  );
};
