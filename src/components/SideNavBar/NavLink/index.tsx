import React, { useState } from 'react';

import { Container, SubMenuLinks } from './style';

import { ISideNavBarData } from '../Data';

interface IPropsNavLink {
  item: ISideNavBarData;
}

const NavLink: React.FC<IPropsNavLink> = ({ item }) => {
  const [subMenu, setSubMenu] = useState(false);

  const showSubnav = () => setSubMenu((prev) => !prev);

  return (
    <>
      <Container to={item.path} onClick={showSubnav}>
        <li>
          <i>{item.icon}</i>
          <p>{item.title}</p>
          {item.subNav && subMenu
            ? item.iconClosed
            : item.subNav && item.iconOpened}
        </li>
      </Container>
      {subMenu &&
        item.subNav?.map((itemSubNav, index) => (
          <SubMenuLinks key={index.toString()}>
            <li>
              <i>{itemSubNav.icon}</i>
              {itemSubNav.title}
            </li>
          </SubMenuLinks>
        ))}
    </>
  );
};

export default NavLink;
