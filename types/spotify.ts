export type SpotifyTrack = {
  albumImages: string[];
  artists: string[];
  external_url: string[];
  name: string;
};

export type SpotifyItem = {
  is_playing?: boolean;
  item: SpotifyTrack;
};
