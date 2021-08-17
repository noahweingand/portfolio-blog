export type SpotifyTrack = {
  albumImages: string[];
  artists: string[];
  externalUrl: string[];
  name: string;
};

export type SpotifyItem = {
  isPlaying?: boolean;
  item: SpotifyTrack;
};
