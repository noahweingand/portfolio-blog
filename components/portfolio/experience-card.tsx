import React from 'react';

type ExperienceCardProps = {
  company: string;
  title: string;
  startDate: string;
  endDate: string;
  status: string;
  location: string;
  descriptions: string[];
  imagePath: string;
  altImageText: string;
};

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  company,
  title,
  startDate,
  endDate,
  status,
  location,
  descriptions,
  imagePath,
  altImageText,
}) => {
  return (
    <div className="max-w-md mx-auto mb-16 px-4 bg-white rounded-xl shadow-md md:max-w-4xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-full w-full pt-6 md:pr-2 sm:pr-0 object-fit md:object-contain md:w-32 md:h-32"
            src={imagePath}
            alt={altImageText}
          />
        </div>
        <div className="flex-grow pt-8 pr-4 pb-8 pl-2">
          <div className="uppercase tracking-wide text-sm font-semibold">{company}</div>
          <div className="grid grid-cols-2 mt-1">
            <p className="block text-lg leading-tight font-medium text-black">{title}</p>
            <p className="text-gray-500 justify-self-end">
              {startDate} - {endDate}
            </p>
          </div>
          <div className="mt-2 grid grid-cols-2 justify-item-stretch text-gray-500">
            <p>{status}</p>
            <p className="justify-self-end">{location}</p>
          </div>
          <ul className="mt-2 text-gray-500 list-disc">
            {descriptions.map((desc, idx) => {
              return <li key={`${title}-${idx}`}>{desc}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
