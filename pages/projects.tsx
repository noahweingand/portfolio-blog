import { PortfolioContainer } from '../components/portfolio-container';
import { ProjectCard } from '../components/portfolio/project-card';

const testProjects = [
  {
    title: 'Common Card Collection',
    type: 'Personal',
    startDate: 'March 2021',
    techType: 'Full-stack',
    technology: 'React.js, Node (Express.js), NoSQL (DynamoDB), AWS',
    link: 'http://google.com',
    description: `A web application I built for my father. He needed an application to log various sport cards for organization and selling purposes. A table displays all cards and their fields (year, fabric, sport, etc.), and a log page is provided to enter in card details. Since my father uses multiple sites to sell, there's a button that provides a download of the database in CSV format from the server. I deployed the application and whitelisted his IP for an AWS VPC.`,
  },
  {
    title: 'No More Statues',
    type: 'Personal',
    startDate: 'June 2020',
    endDate: 'July 2020',
    techType: 'Full-stack',
    technology: 'React.js, Node (Express.js), NoSQL (DynamoDB), AWS',
    link: 'http://google.com',
    description: `A web application I built immediately after George Floyd's murder. The site uses a Leaflet map to render historical monuments of racists and colonizers and tracks if they have been removed or not. One may also search by name or date of monuments removed.`,
  },
  {
    title: 'Producer Database',
    type: 'Academic',
    startDate: 'January 2020',
    endDate: 'May 2020',
    techType: 'Full-stack',
    technology: 'Vue.js, Node (Express.js), MySQL',
    link: 'http://google.com',
    description: `My final project built for my relational database class. It is essentially Wikipedia but for rap/hip-hop producers!`,
  },
  {
    title: 'HuntVCU',
    type: 'Academic',
    startDate: 'January 2020',
    endDate: 'May 2020',
    techType: 'Front-end',
    technology: 'HTML5, CSS, JQuery',
    link: 'http://google.com',
    description: `My final project for my UI and design class. It is a scavenger hunt game made available for those wanting to tour VCU during the pandemic.`,
  },
  {
    title: 'Tweet Tagger',
    type: 'Academic',
    startDate: 'February 2020',
    techType: 'Data Science',
    technology: 'Python, Numpy, Pandas, NLP',
    link: 'http://google.com',
    description: `A sentiment analysis classifier built using a decision tree that tagged various tweets using a training set of hand-tagged tweets. Features such as hashtags, emoticons, and punctuation were used to identify the sentiment of tweets.`,
  },
  {
    title: 'CourseBot',
    type: 'Academic',
    startDate: 'August 2019',
    endDate: 'December 2019',
    techType: 'Mobile',
    technology: 'Java, Android Studio, JUnit',
    link: 'http://google.com',
    description: `A mobile application that queries the web for descriptions and links for free online courses. I wrote several web scrapers for sites such as Udemy, Coursera, etc.`,
  },
];

export default function Projects() {
  return (
    <PortfolioContainer>
      <div className="relative w-full h-5/6 justify-center top-24 overflow-y-auto">
        <div className="flex flex-wrap">
          {testProjects.map((project) => {
            return (
              <ProjectCard
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
