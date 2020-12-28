import React from 'react';

import { Container } from './style';

interface IHeaderMenuDropDown {
  showDropDown: boolean;
}

const HeaderMenuDropDown: React.FC<IHeaderMenuDropDown> = ({
  children,
  showDropDown,
}) => {
  return showDropDown ? <Container>{children}</Container> : null;
};

export default HeaderMenuDropDown;
