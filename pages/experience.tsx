import { PortfolioContainer } from '../components/portfolio-container';
import { ExperienceCard } from '../components/portfolio/experience-card';

export default function Experience() {
  return (
    <PortfolioContainer>
      <div className="relative grid items-center h-screen top-24 overflow-y-auto">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </PortfolioContainer>
  );
}
