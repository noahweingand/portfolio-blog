// Components
import { PortfolioContainer } from '../components/portfolio-container';
import { SkillCard } from '../components/portfolio/skill-card';
// Constants
import { languages, frameworks, databases, testing, general } from '../constants/skills';
import { APP_URL } from '../constants/env';
// Hooks
import { useUserAgent } from 'next-useragent';
// Services
import fetch from 'node-fetch';
// Types
import { SpotifyItem } from '../types/spotify';
import { GetServerSidePropsContext } from 'next';

export default function Skills({ data, userAgent }: { data: SpotifyItem; userAgent: string }) {
  const ua = useUserAgent(userAgent ?? '');

  return (
    <PortfolioContainer background={data.item.albumImages[0]} userAgent={userAgent}>
      <div className="relative w-full px-4 h-5/6 justify-center top-24 overflow-y-auto">
        <SkillCard domain={'Languages'} skills={languages} isMobile={ua.isMobile} />
        <SkillCard domain={'Libraries & Frameworks'} skills={frameworks} isMobile={ua.isMobile} />
        <SkillCard domain={'Databases'} skills={databases} isMobile={ua.isMobile} />
        <SkillCard domain={'Testing'} skills={testing} isMobile={ua.isMobile} />
        <SkillCard domain={'General'} skills={general} isMobile={ua.isMobile} />
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
