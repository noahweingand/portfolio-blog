type HomeProps = {
  name: string;
  title: string;
};

export const Home: React.FC<HomeProps> = ({ name, title }) => {
  return (
    <div className="video-wrapper">
      <h1 className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl text-white font-semibold">
        {name}
      </h1>
      {/* <h3 className="absolute inset-0 z-20 flex justify-center items-center text-4xl text-white">
        {title}
      </h3> */}
      <video
        autoPlay
        loop
        muted
        //className="w-full"
        className="background-video"
      >
        <source
          // src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4"
          src="/coding.mov"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
