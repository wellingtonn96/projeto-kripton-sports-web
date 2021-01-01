import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { Container, SubMenuLinks } from './style';

import { ISideNavBarData } from '../Data';

interface IPropsNavLink {
  item: ISideNavBarData;
}

const NavLink: React.FC<IPropsNavLink> = ({ item }) => {
  const [subMenu, setSubMenu] = useState(false);
  const [subMenuSelected, setSubMenuSelected] = useState(false);

  const showSubnav = () => {
    setSubMenu((prev) => !prev);
    setSubMenuSelected((prev) => !prev);
  };

  useEffect(() => {
    if (item.subNav && subMenu) {
      setSubMenuSelected(true);
    }
  }, [subMenu, item.subNav]);

  return (
    <>
      <Container
        to={item.path}
        onClick={showSubnav}
        subMenuSelected={subMenuSelected}
      >
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
            <Link to={itemSubNav.path}>
              <li>
                <i>{itemSubNav.icon}</i>
                {itemSubNav.title}
              </li>
            </Link>
          </SubMenuLinks>
        ))}
    </>
  );
};

export default NavLink;
