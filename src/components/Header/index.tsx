import React, { useState } from 'react';

import { FaBell, FaSearch, FaBars } from 'react-icons/fa';

import { FiSettings } from 'react-icons/fi';

import { AiOutlineLogout, AiFillAccountBook } from 'react-icons/ai';
import { Container, HeaderDropDown, InputSearch } from './style';
import perfilImg from '../../assets/img_ws.jpg';
import { useGlobal } from '../../hooks/Global';

import HeaderMenuDropDown from './HeaderMenuDropdown';

const Header: React.FC = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const { openModal, showOrHideSideBar } = useGlobal();

  const openDropDown = () => {
    setShowDropDown((prev) => !prev);
  };

  return (
    <>
      <Container>
        <ul>
          <li>
            <i>
              <FaBars onClick={showOrHideSideBar} />
            </i>
          </li>
          <li>
            <InputSearch>
              <input type="text" />
              <button type="button">
                <FaSearch />
              </button>
            </InputSearch>
          </li>
        </ul>

        <ul style={{ position: 'fixed', right: '10px', top: '10px' }}>
          <li>
            <i>
              <FaBell />
            </i>
          </li>
          <li>
            <img
              src={perfilImg}
              alt="perfil usuario"
              onClick={openDropDown}
              onKeyPress={openDropDown}
              role="presentation"
            />
            <HeaderMenuDropDown showDropDown={showDropDown}>
              <HeaderDropDown>
                <img src={perfilImg} alt="" />
                <div>
                  <span>wellington santos</span>
                  <p>weltossousa@gmail.com</p>
                </div>
              </HeaderDropDown>
              <li>
                <i>
                  <AiFillAccountBook />
                </i>
                Account
              </li>
              <li>
                <i>
                  <FiSettings />
                </i>
                Setting
              </li>
              <li onClick={openModal} role="presentation">
                <i>
                  <AiOutlineLogout />
                </i>
                Logout
              </li>
            </HeaderMenuDropDown>
          </li>
        </ul>
      </Container>
    </>
  );
};

export default Header;
