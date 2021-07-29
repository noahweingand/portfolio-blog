import { Nav, Home } from './portfolio/index';

export const PortfolioContainer = () => {
  return (
    <header className="relative h-screen overflow-hidden">
      <video autoPlay loop muted className="absolute z-0 w-auto min-w-full min-h-full max-w-none">
        <source src="/coding.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Nav />
      <Home name="Noah Weingand" title="Full Stack Developer" />
    </header>
  );
};
