import { SpotifyItem } from '../../types/spotify';
import { SpotifyStub } from './spotify-stub';

type HomeProps = {
  name: string;
  title: string;
  data: SpotifyItem;
};

export const Landing: React.FC<HomeProps> = ({ name, title, data }) => {
  return (
    <div className="relative mt-16 opacity-0 hover:opacity-100 duration-300 grid content-center justify-center items-center h-screen text-white">
      <h1 className="flex mb-16 text-6xl font-semibold">{name}</h1>
      <h3 className="flex justify-center text-2xl">{title}</h3>
      <SpotifyStub isPlaying={data.isPlaying} item={data.item} />
    </div>
  );
};
