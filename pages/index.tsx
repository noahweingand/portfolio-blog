// Components
import { PortfolioContainer } from '../components/portfolio-container';
import { Landing } from '../components/portfolio';
// Services
import fetch from 'node-fetch';
// Types
import { SpotifyItem } from '../types/spotify';

export default function Home({ data }: { data: SpotifyItem }) {
  return (
    <PortfolioContainer>
      <Landing name="Noah Weingand" title="Full Stack Engineer" data={data} />
    </PortfolioContainer>
  );
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/spotify');
  const { data } = await res.json();

  return {
    props: {
      data,
    },
  };
}
