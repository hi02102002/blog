import { InputHTMLAttributes } from 'react';

import { clsxm } from '@/utils/clsxm';

type Props = InputHTMLAttributes<HTMLInputElement>;

const Input = ({ className, ...props }: Props) => {
  return (
    <input
      type="text"
      className={clsxm(
        'w-full px-5 py-3 text-base text-gray-900 placeholder-gray-500 border border-transparent rounded-md shadow-sm',
        className
      )}
      {...props}
    />
  );
};

export default Input;
