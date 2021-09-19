import fetch from 'node-fetch';
import { SpotifyItem } from '../types/spotify';
import { mapCurrentSpotifyItem, mapRecentSpotifyItem } from './helpers/spotify-helper';
import { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN } from '../constants/env';

export async function getAccessToken(): Promise<string> {
  try {
    const authReq = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        Authorization:
          'Basic ' +
          Buffer.from(SPOTIFY_CLIENT_ID + ':' + SPOTIFY_CLIENT_SECRET).toString('base64'),
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: SPOTIFY_REFRESH_TOKEN!,
      }),
    });

    const { access_token }: { access_token: string } = await authReq.json();

    return access_token;
  } catch (err) {
    console.log(err);
    throw Error('Failed to get authorization for Spotify');
  }
}

export async function getRecentlyPlayedSpotifySong(accessToken: string) {
  const res = await fetch('https://api.spotify.com/v1/me/player/recently-played?limit=1', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  });

  return await res.json();
}

export async function getCurrentSpotifySong(): Promise<SpotifyItem> {
  const accessToken = await getAccessToken();

  const res = await fetch('https://api.spotify.com/v1/me/player/currently-playing?market=US', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  });

  if (res.status === 204) {
    const body = await getRecentlyPlayedSpotifySong(accessToken);
    const { items } = body;

    return mapRecentSpotifyItem(items);
  } else {
    const body = await res.json();

    return mapCurrentSpotifyItem(body);
  }
}
