import React, { useState } from 'react';
import { IconType } from 'react-icons/lib';

import { Container } from './style';

interface IPropsDropDown {
  Icon: IconType;
}

const HeaderMenuDropDown: React.FC<IPropsDropDown> = ({ Icon, children }) => {
  const [showDropDown, setShowDropDown] = useState(false);

  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };
  return (
    <>
      <li
        onClick={toggleDropDown}
        onKeyPress={toggleDropDown}
        role="presentation"
      >
        <Icon />
      </li>
      {showDropDown && <div>{children}</div>}
    </>
  );
};

export default HeaderMenuDropDown;
