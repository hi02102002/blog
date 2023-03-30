import { ButtonHTMLAttributes } from 'react';

import type { Icon as TIcon } from '@tabler/icons-react';

import { clsxm } from '@/utils/clsxm';

type Props = {
  Icon: TIcon;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'>;

const ButtonIcon = ({ className, Icon, ...props }: Props) => {
  return (
    <button
      className={clsxm(
        'w-9 h-9 flex items-center rounded justify-center hover:bg-neutral-200 transition-[background-color] dark:hover:bg-neutral-600',
        className
      )}
      {...props}
    >
      <Icon className="text-inherit" />
    </button>
  );
};

export default ButtonIcon;
