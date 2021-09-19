// Components
import { PortfolioContainer } from '../components/portfolio-container';
import { ExperienceCard } from '../components/portfolio';
// Constants
import { xp } from '../constants/xp';
import { APP_URL } from '../constants/env';
// Types
import { SpotifyItem } from '../types/spotify';
import { GetServerSidePropsContext } from 'next';

export default function Experience({ data, userAgent }: { data: SpotifyItem; userAgent: string }) {
  return (
    <PortfolioContainer background={data.item.albumImages[0]} userAgent={userAgent}>
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
