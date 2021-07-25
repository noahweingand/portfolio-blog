import { Nav } from "./blog/Nav";
import { Content } from "./blog/Content";
import { Footer } from "./blog/Footer";

export const BlogContainer = () => {
  return (
    <body className="bg-gray-100 font-sans leading-normal tracking-normal">
      <Nav />
      <Content />
      <Footer />
    </body>
  );
}