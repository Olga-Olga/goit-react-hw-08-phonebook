import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
// import { NavBar } from './NavBar';
// import { Header } from './HeaderBar/Header';
import { Navbar } from './Navbar';

export const Layout = () => {
  return (
    <LayoutWrapper>
      {/* <Header />
      <WrapperOutlet>
        <Suspense fallback={<h1>Loading</h1>}>
          <Outlet />
        </Suspense>
      </WrapperOutlet> */}
      <Navbar />
      <Outlet />
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr;
`;
// const WrapperOutlet = styled.div`
// padding: 20px;
// padding-left: 290px;
// `;
