import React, { CSSProperties } from 'react';

import { clsxm } from '@/utils/clsxm';

export type TextShadowProps = {
  colorShadow?: string;
  children?: React.ReactNode;
  right?: number;
  down?: number;
  blur?: number;
  className?: string;
};

const TextShadow = ({
  children,
  colorShadow = '#FF6E44',
  blur = 0,
  down = 1,
  right = 2,
  className,
}: TextShadowProps) => {
  const style = {
    textShadow: `${right}px ${down}px ${blur}px ${colorShadow}`,
  } as CSSProperties;

  return (
    <span className={clsxm(className)} style={style}>
      {children}
    </span>
  );
};

export default TextShadow;
