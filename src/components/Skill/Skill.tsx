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
        'flex items-center gap-2 py-2 px-3 rounded-full border hover:border-[var(--color)] relative overflow-hidden cursor-pointer group transition bg-white dark:bg-neutral-800 dark:border-neutral-600 hover:scale-105 text-sm shadow-sm',
        className
      )}
    >
      <div className="absolute inset-0 z-0 opacity-30 transition group-hover:bg-[var(--color)]"></div>
      <Icon className="relative z-[1] h-5 w-5" />
      <span className=" relative z-[1] font-medium leading-[1]">{name}</span>
    </div>
  );
};

export default Skill;
