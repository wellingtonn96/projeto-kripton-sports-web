import React from 'react';

import { useModal } from '../../hooks/Modal';
import { Container } from './style';

import logoImg from '../../assets/logo.png';

import NavLink from './NavLink';

import { SideNavBarData } from './Data';

const AsideMenu: React.FC = () => {
  const { showSideBar } = useModal();

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
