import { TiDocumentText } from 'react-icons/ti';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import { SpotifyItem } from '../../types/spotify';
import { Link } from '../general';
import { Icon } from './icon';
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
        <h1 className="mb-16 text-7xl font-semibold text-center">{name}</h1>
        <h3 className="text-center text-2xl">{title}</h3>
        <div className="flex justify-around items-center pt-16">
          <Link href="https://github.com/noahweingand">
            <Icon icon={AiFillGithub} title="Github" size="4em" className="" color="white" />
          </Link>
          <Link href="https://linkedin.com/in/noahweingand">
            <Icon icon={AiFillLinkedin} title="LinkedIn" size="4em" className="" color="white" />
          </Link>
          <Link href="noah_weingand_resume.pdf">
            <Icon icon={TiDocumentText} title="Resume" size="4em" className="" color="white" />
          </Link>
        </div>
      </div>
      <SpotifyStub isPlaying={data.isPlaying} item={data.item} />
    </div>
  );
};
