import { SpotifyItem } from '../../types/spotify';

type albumImages = {
  height: number;
  url: string;
  width: number;
};

type artists = {
  name: string;
};

const getAlbumImages = (images: albumImages[]): string[] => {
  const ret: string[] = [];
  images.forEach((image) => ret.push(image.url));
  return ret;
};

const getArtistNames = (artists: artists[]): string[] => {
  const ret: string[] = [];
  artists.forEach((artist) => ret.push(artist.name));
  return ret;
};

export const mapRecentSpotifyItem = (items: any): SpotifyItem => {
  const { track } = items[0];
  const { album, artists, external_urls, name } = track;

  return {
    isPlaying: false,
    item: {
      albumImages: getAlbumImages(album?.images),
      artists: getArtistNames(artists),
      externalUrl: external_urls?.spotify,
      name: name,
    },
  };
};

export const mapCurrentSpotifyItem = (items: any): SpotifyItem => {
  const { is_playing, item } = items;
  const { album, artists, external_urls, name } = item;

  return {
    isPlaying: is_playing,
    item: {
      albumImages: getAlbumImages(album?.images),
      artists: getArtistNames(artists),
      externalUrl: external_urls?.spotify,
      name: name,
    },
  };
};
