import React, { useCallback, useState } from 'react';

import { FaBell, FaSearch, FaBars } from 'react-icons/fa';

import { FiSettings } from 'react-icons/fi';

import { AiOutlineLogout, AiFillAccountBook } from 'react-icons/ai';
import { Container, HeaderDropDown, InputSearch } from './style';
import perfilImg from '../../assets/img_ws.jpg';
import { useSideBar } from '../../hooks/SideBar';
import { useModal } from '../../hooks/Modal';

import HeaderMenuDropDown from './HeaderMenuDropdown';

const Header: React.FC = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const { showOrHideSideBar } = useSideBar();
  const { comfirmAlert } = useModal();

  const openDropDown = () => {
    setShowDropDown((prev) => !prev);
  };

  const handleMessage = () => {
    alert('clicked');
  };

  const handleModal = useCallback(() => {
    comfirmAlert({
      title: 'Sair da sessão!',
      description: 'Deseja realmente sair da sessão?',
      button: {
        title: 'Sair',
        onClick: () => handleMessage(),
      },
    });
  }, [comfirmAlert]);

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
              <li onClick={handleModal} role="presentation">
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
