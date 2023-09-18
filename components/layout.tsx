import React from 'react';
import Header from './header';
import Footer from './footer';

type AppLayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: AppLayoutProps) => {
  return (
    <div className="bg-primary">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
