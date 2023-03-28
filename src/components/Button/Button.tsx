import { ButtonHTMLAttributes } from 'react';



import { type VariantProps, tv } from 'tailwind-variants';

import { clsxm } from '@/utils/clsxm';

const button = tv({
  base: 'bg-white rounded transition shadow-sm border text-sm font-medium py-2 px-4 hover:bg-stone-50 dark:bg-stone-700 dark:border-stone-700 dark:hover:bg-opacity-70',
  variants: {
    intents: {
      primary:
        'text-white bg-blue-500 dark:text-white dark:bg-blue-500 hover:bg-blue-600 dark:hover:bg-blue-600 border-blue-500 dark:border-blue-500 hover:border-blue-600 dark:hover:bg-opacity-100',
    },
  },
});

type Props = VariantProps<typeof button> &
  ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, className, ...props }: Props) => {
  return (
    <button className={clsxm(button(props), className)} {...props}>
      {children}
    </button>
  );
};

export default Button;