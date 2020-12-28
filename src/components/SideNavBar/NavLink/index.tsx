import React from 'react';

import { Container } from './style';

import { ISideNavBarData } from '../Data';

interface IPropsNavLink {
  item: ISideNavBarData;
}

const NavLink: React.FC<IPropsNavLink> = ({ item }) => {
  return (
    <Container to={item.path}>
      <li>
        <i>{item.icon}</i>
        {item.title}
      </li>
    </Container>
  );
};

export default NavLink;
