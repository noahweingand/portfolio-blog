import React from 'react';
import { IconType } from 'react-icons';
import { Icon } from './icon';

type SkillCardProps = {
  domain: string;
  skills: {
    name: string;
    icon?: IconType;
  }[];
};

export const SkillCard: React.FC<SkillCardProps> = ({ domain, skills }) => {
  return (
    <div className="max-w-md mx-auto mb-16 px-4 bg-white rounded-xl shadow-md md:max-w-4xl">
      <div className="pt-8 pr-4 pb-8 pl-2">
        <h1 className="flex font-semibold text-lg">{domain}</h1>
        <div className="pt-8">
          <ul className="flex text-md list-disc list-inside inline justify-around items-center">
            {skills.map((skill, idx) => {
              return !!skill.icon ? (
                <div key={idx} className="flex justify-around">
                  <Icon
                    icon={skill.icon}
                    title={skill.name}
                    size="3em"
                    className={''}
                    color={'black'}
                  />
                </div>
              ) : (
                <div key={idx} className="flex justify-around">
                  <span className="text-xl">{skill.name}</span>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
