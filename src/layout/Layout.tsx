import React from 'react';



import Footer from './Footer';
import Header from './Header';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="pt-header flex-1 flex flex-col">
        <div className="flex-grow">{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;