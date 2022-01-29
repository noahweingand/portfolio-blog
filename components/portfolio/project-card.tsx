import { Link } from '../general';

type ProjectCardProps = {
  title: string;
  type: string;
  startDate: string;
  endDate?: string;
  techType: string;
  technology: string;
  link: string;
  description: string;
};

const getDate = (start: string, end?: string) => {
  return end ? (
    <span className="text-gray-500 justify-self-end">
      {start} - {end}
    </span>
  ) : (
    <span className="text-gray-500 justify-self-end">{start}</span>
  );
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  type,
  startDate,
  endDate,
  techType,
  technology,
  link,
  description,
}) => {
  return (
    <div className="max-w-md w-full mx-auto mb-8 px-4 bg-white rounded-xl shadow-md md:max-w-4xl">
      <div className="md:flex">
        <div className="pt-8 pr-4 pb-8 pl-2">
          <span className="uppercase tracking-wide font-semibold">{title}</span>
          <div className="grid grid-cols-2 mt-1">
            <span className="block leading-tight text-sm font-medium text-black">{type}</span>
            {getDate(startDate, endDate)}
          </div>
          <div className="mt-2 grid grid-cols-2 justify-item-stretch text-gray-500">
            <span>{techType}</span>
            <div className="justify-self-end">
              <span>{technology}</span>
            </div>
          </div>
          <span className="mt-2 text-gray-500">
            <Link className="underline hover:no-underline" href={link}>
              View on Github
            </Link>
          </span>
          <p className="mt-4 text-gray-500">{description}</p>
        </div>
      </div>
    </div>
  );
};
