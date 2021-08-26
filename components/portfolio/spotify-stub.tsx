import React from 'react';
import { SiSpotify } from 'react-icons/si';
import { IconType } from 'react-icons';
import 'react-tippy/dist/tippy.css';
import { Tooltip } from 'react-tippy';
import { SpotifyItem } from '../../types/spotify';

const renderArtists = (artists: string[]): string => {
  let artistNames = '';
  let artistNamesLength = artists.length;
  artists.forEach((artist, idx) => {
    if (idx === artistNamesLength - 1) {
      artistNames = artistNames + artist;
    } else {
      artistNames = artistNames + `${artist}, `;
    }
  });
  return artistNames;
};

const Icon = ({ icon, title }: { icon: IconType; title: string }) => {
  return (
    <Tooltip title={title}>
      {icon({ className: 'pb-1 inline', size: '2em', fill: 'green' })}
    </Tooltip>
  );
};

export const SpotifyStub: React.FC<SpotifyItem> = ({ isPlaying, item }) => {
  const icon = isPlaying ? (
    <span className="bg-green-500 h-2 w-2 animate-pulse mr-2 mb-0.5 rounded-full inline-block"></span>
  ) : (
    <span className="bg-red-500 h-2 w-2 animate-pulse mr-2 mb-0.5 rounded-full inline-block"></span>
  );
  return (
    <div className="absolute bottom-0 right-2">
      <div className="bottom-0 w-full text-white text-lg content-end">
        <span>
          {icon}
          <a
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
            href={item.externalUrl}
          >
            <span className="font-bold">{item.name}</span>
          </a>{' '}
          by{' '}
          <span className="font-bold">
            {renderArtists(item.artists)} {'    '}
          </span>
          <span>
            <a target="_blank" rel="noopener noreferrer" href={item.profileUrl}>
              <Icon icon={SiSpotify} title={"Noah's Spotify"} />
            </a>
          </span>
        </span>
      </div>
    </div>
  );
};
