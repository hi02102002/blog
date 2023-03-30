import React from 'react';

import { Container, TextShadow, TextShadowProps } from '@/components';
import { clsxm } from '@/utils/clsxm';

type Props = {
  title: string;
  className?: string;
  wrapperClassName?: string;
  children?: React.ReactNode;
  textShadowProps?: TextShadowProps;
};

const SectionPage = ({
  children,
  title,
  className,
  wrapperClassName,
  textShadowProps,
}: Props) => {
  return (
    <div className={clsxm('py-4', className)}>
      <Container>
        <h2 className="text-2xl font-bold ">
          <TextShadow right={3} {...textShadowProps}>
            {title}
          </TextShadow>
        </h2>
        <div className={clsxm('mt-4', wrapperClassName)}>{children}</div>
      </Container>
    </div>
  );
};

export default SectionPage;
