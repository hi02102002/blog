import { HTMLAttributes } from 'react';

import { clsxm } from '@/utils/clsxm';

type Props = {
  active?: boolean;
} & HTMLAttributes<HTMLDivElement>;

const Tag = ({ children, className, active, ...props }: Props) => {
  return (
    <div
      className={clsxm(
        'rounded bg-neutral-100 dark:bg-stone-700 p-1 px-2 max-w-max cursor-pointer min-w-[5rem] flex items-center justify-center transition border-transparent border-2 leading-[1]',
        'hover:border-2 hover:border-neutral-300 ',
        {
          'border-2 border-neutral-300': active,
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Tag;
