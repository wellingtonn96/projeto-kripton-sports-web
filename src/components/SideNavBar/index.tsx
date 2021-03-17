import React, { useContext } from 'react';

import { ThemeContext } from 'styled-components';
import { useSideBar } from '../../hooks/SideBar';
import { Container } from './style';

import NavLink from './NavLink';

import logoImgDark from '../../assets/logo-dark.svg';
import logoImgLight from '../../assets/logo-light.svg';

import { SideNavBarData } from '../../constants/sideNavBarData';

const AsideMenu: React.FC = () => {
  const { showSideBar } = useSideBar();
  const { title } = useContext(ThemeContext);

  return (
    <Container sideBar={showSideBar}>
      <div>
        {title === 'dark' ? (
          <img src={logoImgDark} alt="logo" />
        ) : (
          <img src={logoImgLight} alt="logo" />
        )}
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
