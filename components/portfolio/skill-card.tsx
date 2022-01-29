import React from 'react';
import { IconType } from 'react-icons';
import { Icon } from './icon';

type SkillCardProps = {
  domain: string;
  skills: {
    id: number;
    name: string;
    icon?: IconType;
  }[];
  isMobile: boolean;
};

export const SkillCard: React.FC<SkillCardProps> = ({ domain, skills, isMobile }) => {
  return (
    <div className="max-w-md mx-auto mb-16 px-4 bg-white rounded-xl shadow-md md:max-w-4xl">
      <div className="pt-8 pr-4 pb-8 pl-2">
        <span className="flex font-semibold text-lg">{domain}</span>
        <div className="pt-12">
          <div className="flex flex-wrap text-md list-disc list-inside inline justify-around items-center">
            {skills.map((skill) => {
              return !!skill.icon ? (
                <div key={skill.id} className="flex md:pr-4">
                  <Icon
                    icon={skill.icon}
                    title={skill.name}
                    size={isMobile ? '2em' : '3em'}
                    className=""
                    color="black"
                  />
                </div>
              ) : (
                <div key={skill.id} className="flex justify-around">
                  <span className="text-xl">{skill.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
