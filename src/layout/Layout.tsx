import React from 'react';

import { clsxm } from '@/utils/clsxm';

import Footer from './Footer';
import Header from './Header';

type Props = {
  children: React.ReactNode;
  wrapperClassName?: string;
};

const Layout = ({ children, wrapperClassName }: Props) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex flex-1 flex-col pt-header">
        <div className={clsxm('flex-grow', wrapperClassName)}>{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
