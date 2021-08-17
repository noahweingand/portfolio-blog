import React from 'react';
import { SpotifyItem } from '../../types/spotify';

export const SpotifyStub: React.FC<SpotifyItem> = ({ isPlaying, item }) => {
  return (
    <div className="content-end">
      <div className="content-end">test</div>
    </div>
  );
};
