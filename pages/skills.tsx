// Components
import { PortfolioContainer } from '../components/portfolio-container';
import { SkillCard } from '../components/portfolio/skill-card';
// Constants
import { languages, frameworks, databases, testing, general } from '../constants/skills';
import { APP_URL } from '../constants/env';
// Services
import fetch from 'node-fetch';
// Types
import { SpotifyItem } from '../types/spotify';
import { GetServerSidePropsContext } from 'next';

export default function Skills({ data, userAgent }: { data: SpotifyItem; userAgent: string }) {
  return (
    <PortfolioContainer background={data.item.albumImages[0]} userAgent={userAgent}>
      <div className="relative w-full h-5/6 justify-center top-24 overflow-y-auto">
        <SkillCard domain={'Languages'} skills={languages} />
        <SkillCard domain={'Frameworks'} skills={frameworks} />
        <SkillCard domain={'Databases'} skills={databases} />
        <SkillCard domain={'Testing'} skills={testing} />
        <SkillCard domain={'General'} skills={general} />
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
