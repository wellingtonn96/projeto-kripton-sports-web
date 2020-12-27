import React, { useState } from 'react';

import { FaBell, FaSearch, FaBars } from 'react-icons/fa';

import { FiSettings } from 'react-icons/fi';

import { AiOutlineLogout, AiFillAccountBook } from 'react-icons/ai';
import { Container, HeaderDropwon } from './style';
import perfilImg from '../../assets/img_ws.jpg';
import { useModal } from '../../hooks/Modal';

import HeaderMenuDropDown from './HeaderMenuDropdown';

const Header: React.FC = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const { openModal } = useModal();

  const openDropDown = () => {
    setShowDropDown((prev) => !prev);
  };

  return (
    <>
      <Container>
        <ul style={{ flexGrow: 1 }}>
          <li>
            <i>
              <FaBars />
            </i>
          </li>
          <li>
            <input type="text" />
          </li>
          <li>
            <i>
              <FaSearch />
            </i>
          </li>
        </ul>

        <ul>
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
              <HeaderDropwon>
                <img src={perfilImg} alt="" />
                <div>
                  <span>wellington santos</span>
                  <p>weltossousa@gmail.com</p>
                </div>
              </HeaderDropwon>
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
              <li onClick={() => openModal()} role="presentation">
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
