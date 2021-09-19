// Components
import { PortfolioContainer } from '../components/portfolio-container';
import { ProjectCard } from '../components/portfolio';

// Constants
import { projects } from '../constants/projects';

export default function Projects() {
  return (
    <PortfolioContainer>
      <div className="relative w-full h-5/6 justify-center top-24 overflow-y-auto">
        <div className="flex flex-wrap">
          {projects.map((project, idx) => {
            return (
              <ProjectCard
                key={`project-${idx}`}
                title={project.title}
                type={project.type}
                startDate={project.startDate}
                endDate={project.endDate}
                techType={project.techType}
                technology={project.technology}
                link={project.link}
                description={project.description}
              />
            );
          })}
        </div>
      </div>
    </PortfolioContainer>
  );
}
