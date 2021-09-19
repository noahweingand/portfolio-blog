// Components
import { PortfolioContainer } from '../components/portfolio-container';
import { ContactForm } from '../components/portfolio';
// Constants
import { APP_URL } from '../constants/env';
// Services
import fetch from 'node-fetch';
// Types
import { SpotifyItem } from '../types/spotify';
import { GetServerSidePropsContext } from 'next';

export default function Contact({ data, userAgent }: { data: SpotifyItem; userAgent: string }) {
  return (
    <PortfolioContainer background={data.item.albumImages[0]} userAgent={userAgent}>
      <div className="relative flex justify-center h-screen top-28 overflow-hidden">
        <ContactForm />
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
