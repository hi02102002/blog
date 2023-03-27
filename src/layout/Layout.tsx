import React from 'react';

import Header from './Header';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <div className="pt-header">{children}</div>
    </>
  );
};

export default Layout;
