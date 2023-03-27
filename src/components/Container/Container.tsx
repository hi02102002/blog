import { HTMLAttributes } from 'react';

import { clsxm } from '@/utils/clsxm';

type Props = HTMLAttributes<HTMLDivElement>;

const Container = ({ className, children, ...props }: Props) => {
  return (
    <div
      className={clsxm('max-w-3xl mx-auto w-full px-4', className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
