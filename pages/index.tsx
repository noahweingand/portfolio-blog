import { PortfolioContainer } from '../components/portfolio-container';
import { Landing } from '../components/portfolio';
import { getCurrentSpotifySong } from '../services/spotify';
import { SpotifyItem } from '../types/spotify';

export default function Home({ data }: { data: SpotifyItem }) {
  return (
    <PortfolioContainer>
      <Landing name="Noah Weingand" title="Full Stack Engineer" data={data} />
    </PortfolioContainer>
  );
}

export async function getServerSideProps() {
  const data = await getCurrentSpotifySong();
  return {
    props: {
      data,
    },
  };
}
