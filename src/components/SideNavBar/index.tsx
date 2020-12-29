import React from 'react';

import { useGlobal } from '../../hooks/Global';
import { Container } from './style';

import logoImg from '../../assets/logo.png';

import NavLink from './NavLink';

import { SideNavBarData } from './Data';

const AsideMenu: React.FC = () => {
  const { showSideBar } = useGlobal();

  return (
    <Container sideBar={showSideBar}>
      <div>
        <img src={logoImg} alt="logo" />
      </div>
      <ul>
        {SideNavBarData.map((item, index) => (
          <NavLink item={item} key={index.toString()} />
        ))}
      </ul>
    </Container>
  );
};

export default AsideMenu;
