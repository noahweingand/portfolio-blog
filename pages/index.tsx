import { useState, useEffect } from 'react';
// Components
import { PortfolioContainer } from '../components/portfolio-container';
import { Landing } from '../components/portfolio';
// Constants
import { APP_URL } from '../constants/env';
// Types
import { SpotifyItem } from '../types/spotify';
import { GetServerSidePropsContext } from 'next';

export default function Home({ data, userAgent }: { data: SpotifyItem; userAgent: string }) {
  const [spotifyData, setSpotifyData] = useState<SpotifyItem>(data);

  useEffect(() => {
    setTimeout(() => {
      updateSong();
    }, 15000);
  }, [spotifyData]);

  const updateSong = () => {
    fetch('/api/spotify')
      .then((res) => res.json())
      .then(({ data }) => {
        setSpotifyData(data);
      })
      .catch((e) => console.log(e));
  };

  return (
    <PortfolioContainer background={spotifyData.item.albumImages[0]} userAgent={userAgent}>
      <Landing name="Noah Weingand" title="Web Engineer" data={spotifyData} />
    </PortfolioContainer>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const res = await fetch(`${APP_URL}/api/spotify`);
  const { data } = await res.json();

  return {
    props: {
      data,
      userAgent: context?.req?.headers['user-agent'],
    },
  };
}
