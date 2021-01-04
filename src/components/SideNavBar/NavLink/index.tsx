import React, { useEffect, useState } from 'react';

import { Container, SubMenuLinks } from './style';

import { ISideNavBarData } from '../Data';

interface IPropsNavLink {
  item: ISideNavBarData;
}

const NavLink: React.FC<IPropsNavLink> = ({ item }) => {
  const [subMenu, setSubMenu] = useState(false);
  const [subMenuSelected, setSubMenuSelected] = useState(false);
  const [action, setAction] = useState<'selected' | undefined>('selected');

  const showSubnav = () => {
    setSubMenu((prev) => !prev);

    if (item.subNav && !subMenu) {
      setSubMenuSelected(true);
    } else {
      setSubMenuSelected(false);
    }
  };

  useEffect(() => {
    if (item.subNav) {
      setAction(undefined);
    }
  }, [item.subNav]);

  return (
    <>
      <Container
        to={item.path}
        onClick={showSubnav}
        activeClassName={action}
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
          <ul>
            <SubMenuLinks
              key={index.toString()}
              to={itemSubNav.path}
              activeClassName="selected"
            >
              <li>
                <i>{itemSubNav.icon}</i>
                {itemSubNav.title}
              </li>
            </SubMenuLinks>
          </ul>
        ))}
    </>
  );
};

export default NavLink;
