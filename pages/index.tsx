// Components
import { PortfolioContainer } from '../components/portfolio-container';
import { Landing } from '../components/portfolio';
// Services
import fetch from 'node-fetch';
// Types
import { SpotifyItem } from '../types/spotify';
import { GetServerSidePropsContext } from 'next';

const APP_URL = process.env.APP_URL;

export default function Home({ data, userAgent }: { data: SpotifyItem; userAgent: string }) {
  return (
    <PortfolioContainer background={data.item.albumImages[0]} userAgent={userAgent}>
      <Landing name="Noah Weingand" title="Full Stack Engineer" data={data} />
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
