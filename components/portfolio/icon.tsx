import React from 'react';
import { Tooltip } from 'react-tippy';
import { IconType } from 'react-icons';

export const Icon = ({
  icon,
  title,
  size,
  className,
  color,
}: {
  icon: IconType;
  title: string;
  size: string;
  className: string;
  color?: string | undefined;
}) => {
  return <Tooltip title={title}>{icon({ className: className, size: size, fill: color })}</Tooltip>;
};
