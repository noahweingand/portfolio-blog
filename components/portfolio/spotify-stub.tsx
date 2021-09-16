import React, { useState, useEffect } from 'react';
// Components
import { SiSpotify } from 'react-icons/si';
import { Icon } from './icon';
// Hooks
// Services
import fetch from 'node-fetch';
// Types
import { SpotifyItem, SpotifyTrack } from '../../types/spotify';
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
  const [song, setSong] = useState<SpotifyTrack>(item);
  const [playing, setPlaying] = useState<boolean | undefined>(isPlaying);

  useEffect(() => {
    setSong(song);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      updateSong();
    }, 15000);
  }, [song]);

  const updateSong = () => {
    fetch('http://localhost:3000/api/spotify')
      .then((res) => res.json())
      .then(({ data }) => {
        setPlaying(data.isPlaying);
        setSong(data.item);
      })
      .catch((e) => console.log(e));
  };

  const icon = playing ? (
    <span className="bg-green-500 h-2 w-2 animate-pulse mr-2 mb-0.5 rounded-full inline-block"></span>
  ) : (
    <span className="bg-red-500 h-2 w-2 animate-pulse mr-2 mb-0.5 rounded-full inline-block"></span>
  );

  return (
    <div className="absolute bottom-2 right-2 content-end rounded-xl bg-opacity-75 bg-gray-800 pt-2 px-4">
      <div className="flex bottom-0 w-full text-white text-lg justify-around">
        <span className="">
          {icon}
          <a
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
            href={song.externalUrl}
          >
            <span className="font-bold">{song.name}</span>
          </a>
          {'   '}
          by {'   '}
          <span className="font-bold">
            {renderArtists(song.artists, song.name)} {'    '}
          </span>
        </span>
        <span className="pl-2 justify-items-end">
          <a target="_blank" rel="noopener noreferrer" href={song.profileUrl}>
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
