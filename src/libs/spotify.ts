/* eslint-disable @typescript-eslint/ban-ts-comment */
import axios from 'axios';

import {
  SPOTIFY_CLIENT_ID,
  SPOTIFY_REFRESH_TOKEN,
  SPOTIFY_SECRET,
} from '@/config/var';

export type CurrentTrack = {
  album: {
    images: Array<{
      height: number;
      width: number;
      url: string;
    }>;
  };
  name: string;
  artists: Array<{
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
  }>;
  id: string;
};

const API_URL_TOKEN = 'https://accounts.spotify.com/api/token';
const API_URL_NOW_PLAYING =
  'https://api.spotify.com/v1/me/player/currently-playing';

console.log(SPOTIFY_CLIENT_ID, SPOTIFY_SECRET);

export const getAccessToken = async () => {
  const { access_token } = (await axios
    .post(
      API_URL_TOKEN,
      {},
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization:
            'Basic ' +
            //@ts-ignore
            new Buffer.from(SPOTIFY_CLIENT_ID + ':' + SPOTIFY_SECRET).toString(
              'base64'
            ),
        },
        params: {
          grant_type: 'refresh_token',
          refresh_token: SPOTIFY_REFRESH_TOKEN,
          market: 'ES',
        },
      }
    )
    .then((v) => v.data)) as { access_token: string };

  return access_token;
};

export const getNowPlaying = async () => {
  const accessToken = await getAccessToken();

  const res = await axios.get(API_URL_NOW_PLAYING, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res.data as {
    item?: CurrentTrack;
  };
};
