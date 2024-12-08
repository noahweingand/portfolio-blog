import React from 'react';

import { Tooltip } from 'react-tippy';
import { IconType } from 'react-icons';

export const Icon = ({
  icon,
  text,
  title,
  size,
  className,
  color,
}: {
  icon: IconType;
  text: string;
  title: string;
  size: string;
  className: string;
  color?: string | undefined;
}) => {
  return (
    <Tooltip position="top" title={text}>
      {icon({ className, size, fill: color, title })}
    </Tooltip>
  );
};
