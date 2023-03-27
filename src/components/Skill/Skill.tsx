import { CSSProperties } from 'react';

import type { Icon as TIcon } from '@tabler/icons-react';

import { clsxm } from '@/utils/clsxm';

type Props = {
  color: string;
  className?: string;
  Icon: TIcon;
  name: string;
};

const Skill = ({ Icon, color, name, className }: Props) => {
  const style = {
    '--color': color,
  } as CSSProperties;

  return (
    <div
      style={style}
      className={clsxm(
        'flex items-center gap-2 py-2 px-3 rounded-full border hover:border-[var(--color)] relative overflow-hidden cursor-pointer group transition bg-white hover:scale-105 text-sm shadow-sm',
        className
      )}
    >
      <div className="absolute inset-0 group-hover:bg-[var(--color)] opacity-30 transition z-0"></div>
      <Icon className="w-5 h-5 relative z-[1]" />
      <span className=" relative z-[1] leading-[1] font-medium">{name}</span>
    </div>
  );
};

export default Skill;
