import React from 'react';

import { Container } from './style';

import logoImg from '../../assets/logo.png';

import NavLink from './NavLink';

import { SideNavBarData } from './Data';

const AsideMenu: React.FC = () => {
  return (
    <Container>
      <div>
        <img src={logoImg} alt="logo" />
      </div>
      <ul>
        {SideNavBarData.map((item) => (
          <NavLink item={item} />
        ))}
      </ul>
    </Container>
  );
};

export default AsideMenu;
