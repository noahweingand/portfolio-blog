import { PortfolioContainer } from '../components/portfolio-container';
import { ExperienceCard } from '../components/portfolio';

const testDescription = `According to a study, it has been proven that there is a tight bond between cats and
humans. According to a study, it has been proven that there is a tight bond between cats
and humans. According to a study, it has been proven that there is a tight bond between
cats and humans. According to a study, it has been proven that there is a tight bond
between cats and humans.`;

export default function Experience() {
  return (
    <PortfolioContainer>
      <div className="relative w-full h-5/6 justify-center top-24 overflow-y-auto">
        <ExperienceCard
          company="CoStar Group, Inc."
          title="Associate Software Engineer"
          startDate="June 2021"
          endDate="Present"
          status="Full-time"
          location="Richmond, Virginia"
          description={testDescription}
          imagePath="/experience/costar_logo.png"
          altImageText="CoStar Group, Inc. logo"
        />
        <ExperienceCard
          company="Tahzoo"
          title="Associate Developer"
          startDate="August 2020"
          endDate="June 2021"
          status="Full-time"
          location="Richmond, Virginia"
          description={testDescription}
          imagePath="/experience/tahzoo_logo.png"
          altImageText="Tahzoo logo"
        />
        <ExperienceCard
          company="Tahzoo"
          title="Technical Intern"
          startDate="December 2020"
          endDate="August 2020"
          status="Part-time"
          location="Richmond, Virginia"
          description={testDescription}
          imagePath="/experience/tahzoo_logo.png"
          altImageText="Tahzoo logo"
        />
      </div>
    </PortfolioContainer>
  );
}
