import React from 'react';

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

const getDateFormat = (start: string, end?: string) => {
  return end ? (
    <p className="text-gray-500 justify-self-end">
      {start} - {end}
    </p>
  ) : (
    <p className="text-gray-500 justify-self-end">{start}</p>
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
          <div className="uppercase tracking-wide font-semibold">{title}</div>
          <div className="grid grid-cols-2 mt-1">
            <p className="block leading-tight text-sm font-medium text-black">{type}</p>
            <p className="text-gray-500 justify-self-end">{getDateFormat(startDate, endDate)}</p>
          </div>
          <div className="mt-2 grid grid-cols-2 justify-item-stretch text-gray-500">
            <p>{techType}</p>
            <div className="justify-self-end">
              <p>{technology}</p>
            </div>
          </div>
          <p className="mt-2 text-gray-500">
            <a className="hover:underline" href={link}>
              View on Github
            </a>
          </p>
          <p className="mt-4 text-gray-500">{description}</p>
          {/* <p className="mt-2 pl-4 text-gray-500">
            <ul className="list-disc">
              {descriptions.map((desc) => {
                return <li>{desc}</li>;
              })}
            </ul>
          </p> */}
        </div>
      </div>
    </div>
  );
};
