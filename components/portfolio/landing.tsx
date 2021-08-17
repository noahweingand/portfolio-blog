import { SpotifyItem } from '../../types/spotify';
import { SpotifyStub } from './spotify-stub';

type HomeProps = {
  name: string;
  title: string;
  data: SpotifyItem;
};

export const Landing: React.FC<HomeProps> = ({ name, title, data }) => {
  return (
    <div className="flex h-screen">
      <div className="relative m-auto grid content-center justify-center items-center text-white">
        <h1 className="flex mb-16 text-6xl font-semibold">{name}</h1>
        <h3 className="flex justify-center text-2xl">{title}</h3>
      </div>
      <SpotifyStub isPlaying={data.isPlaying} item={data.item} />
    </div>
  );
};
