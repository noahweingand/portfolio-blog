import { Nav } from './blog/nav';
import { ArticleContainer } from './blog/article-container';
import { Footer } from './blog/footer';

export const BlogContainer = () => {
  return (
    <body className="bg-gray-100 font-sans leading-normal tracking-normal">
      <Nav />
      <ArticleContainer />
      <Footer />
    </body>
  );
};
