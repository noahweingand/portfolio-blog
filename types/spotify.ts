export type SpotifyTrack = {
  albumImages: string[];
  artists: string[];
  externalUrl: string;
  name: string;
  profileUrl: string;
};

export type SpotifyItem = {
  isPlaying?: boolean;
  item: SpotifyTrack;
};
