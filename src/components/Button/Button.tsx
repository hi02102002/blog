import { ButtonHTMLAttributes } from 'react';

import { type VariantProps, tv } from 'tailwind-variants';

import { clsxm } from '@/utils/clsxm';

const button = tv({
  base: 'bg-white rounded transition shadow-sm border text-sm font-medium py-2 px-4 hover:bg-stone-50',
  variants: {
    intents: {
      primary: 'bg-stone-800 text-white border-stone-800 hover:bg-stone-700',
    },
  },
});

type Props = VariantProps<typeof button> &
  ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, className, ...props }: Props) => {
  return (
    <button className={clsxm(button(props), className)}>{children}</button>
  );
};

export default Button;
