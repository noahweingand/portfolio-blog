// Components
import { SiSpotify } from 'react-icons/si';
import { Icon } from './icon';
// Types
import { SpotifyItem } from '../../types/spotify';
// Styles
import 'react-tippy/dist/tippy.css';

const renderArtists = (artists: string[], songName: string): string => {
  let artistNames = '';

  if (!songName.includes('feat.')) {
    let artistNamesLength = artists.length;
    artists.forEach((artist, idx) => {
      if (idx === artistNamesLength - 1) {
        artistNames = artistNames + artist;
      } else {
        artistNames = artistNames + `${artist}, `;
      }
    });
  } else {
    artistNames = artists[0];
  }

  return artistNames;
};

export const SpotifyStub: React.FC<SpotifyItem> = ({ item, isPlaying }) => {
  const isPlayingIcon = isPlaying ? (
    <span className="bg-green-500 h-2 w-2 animate-pulse mt-2.5 mr-2.5 mb-0.5 rounded-full inline-block"></span>
  ) : (
    <span className="bg-red-500 h-2 w-2 animate-pulse mt-2.5 mr-2.5 mb-0.5 rounded-full inline-block"></span>
  );

  return (
    <div className="absolute bottom-2 right-2 content-end rounded-xl bg-opacity-75 bg-gray-800 pt-2 px-4">
      <div className="flex bottom-0 w-full text-white text-lg justify-around">
        <span className="flex">
          {isPlayingIcon}
          <a
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
            href={item.externalUrl}
          >
            <span className="font-bold pr-1">{item.name}</span>
          </a>
          <span className="hidden md:block">
            {'   '}
            by {'   '}
            <span className="font-bold">
              {renderArtists(item.artists, item.name)} {'    '}
            </span>
          </span>
        </span>
        <span className="pl-2 justify-items-end">
          <a target="_blank" rel="noopener noreferrer" href={item.profileUrl}>
            <Icon
              icon={SiSpotify}
              title="Noah's Resume"
              size="2em"
              className="pb-2 inline"
              color="green"
            />
          </a>
        </span>
      </div>
    </div>
  );
};
