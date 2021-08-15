import { PortfolioContainer } from '../components/portfolio-container';
import { Landing } from '../components/portfolio/landing';

export default function Home() {
  return (
    <PortfolioContainer>
      <Landing name="Noah Weingand" title="Full Stack Engineer" />
    </PortfolioContainer>
  );
}
