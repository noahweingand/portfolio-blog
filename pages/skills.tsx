import { PortfolioContainer } from '../components/portfolio-container';
import { SkillCard } from '../components/portfolio/skill-card';
import { languages, frameworks, databases, testing, general } from '../constants/skills';

export default function Skills() {
  return (
    <PortfolioContainer>
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
