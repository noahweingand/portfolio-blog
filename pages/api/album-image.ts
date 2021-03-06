import { NextApiResponse, NextApiRequest } from 'next';
import { getCurrentSpotifySong } from '../../services/spotify';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await getCurrentSpotifySong();

    res.status(200).json({
      data: response.item.albumImages[0],
    });
  } catch (e) {
    res.status(400).json({
      data: 'Spotify call failed.',
    });
  }
}
