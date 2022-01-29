// Components
import { PortfolioContainer } from '../components/portfolio-container';
import { ProjectCard } from '../components/portfolio';
// Constants
import { projects } from '../constants/projects';
import { APP_URL } from '../constants/env';
// Services
import fetch from 'node-fetch';
// Types
import { SpotifyItem } from '../types/spotify';
import { GetServerSidePropsContext } from 'next';

export default function Projects({ data, userAgent }: { data: string; userAgent: string }) {
  return (
    <PortfolioContainer background={data} userAgent={userAgent}>
      <div className="relative w-full px-4 h-5/6 justify-center top-24 overflow-y-auto">
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

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const res = await fetch(`${APP_URL}/api/album-image`);
  const { data } = await res.json();

  return {
    props: {
      data,
      userAgent: context?.req?.headers['user-agent'],
    },
  };
}
