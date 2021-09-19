// Components
import { PortfolioContainer } from '../components/portfolio-container';
import { ExperienceCard } from '../components/portfolio';

// Constants
import { xp } from '../constants/xp';

export default function Experience() {
  return (
    <PortfolioContainer>
      <div className="relative w-full h-5/6 justify-center top-24 overflow-y-auto">
        {xp.map((xp, idx) => {
          return (
            <ExperienceCard
              company={xp.company}
              title={xp.title}
              location={xp.location}
              status={xp.status}
              startDate={xp.startDate}
              endDate={xp.endDate}
              descriptions={xp.description}
              imagePath={xp.imagePath}
              altImageText={xp.altImageText}
              key={idx}
            />
          );
        })}
      </div>
    </PortfolioContainer>
  );
}
