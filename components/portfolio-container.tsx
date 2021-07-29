import { Nav, Home } from './portfolio/index';

export const PortfolioContainer = () => {
  return (
    <div className="relative h-screen">
      <video
        autoPlay
        loop
        muted
        className="absolute w-full"
        //className="background-video"
      >
        <source
          // src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4"
          src="/coding.mov"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <Nav />
      <Home name="Noah Weingand" title="Full Stack Developer" />
    </div>
  );
};
