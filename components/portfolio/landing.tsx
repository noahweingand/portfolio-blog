import { SpotifyItem } from '../../types/spotify';
import { SpotifyStub } from './spotify-stub';
import { Icon } from './icon';
import { TiDocumentText } from 'react-icons/ti';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

type HomeProps = {
  name: string;
  title: string;
  data: SpotifyItem;
};

export const Landing: React.FC<HomeProps> = ({ name, title, data }) => {
  return (
    <div className="flex h-screen">
      <div className="relative m-auto grid content-center justify-center items-center text-white">
        <h1 className="flex mb-16 text-7xl font-semibold">{name}</h1>
        <h3 className="flex justify-center text-2xl">{title}</h3>
        <div className="flex justify-around items-center pt-16">
          <a className="flex" target="_blank" rel="noopener noreferrer" href={'test'}>
            <Icon icon={AiFillGithub} title="Github" size="4em" className={''} color={'white'} />
          </a>
          <a className="flex" target="_blank" rel="noopener noreferrer" href={'test'}>
            <Icon
              icon={AiFillLinkedin}
              title="LinkedIn"
              size="4em"
              className={''}
              color={'white'}
            />
          </a>
          <a className="flex" target="_blank" rel="noopener noreferrer" href={'test'}>
            <Icon icon={TiDocumentText} title="Resume" size="4em" className={''} color={'white'} />
          </a>
        </div>
      </div>
      <SpotifyStub isPlaying={data.isPlaying} item={data.item} />
    </div>
  );
};
