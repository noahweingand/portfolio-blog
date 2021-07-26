import { Heading, Content, Tags, Selector } from './article/index';

export const ArticleContainer = () => {
  return (
    <div className="container w-full md:max-w-3xl mx-auto pt-20">
      <Heading />
      <Content />
      <Tags />
      <Selector />
    </div>
  );
};
