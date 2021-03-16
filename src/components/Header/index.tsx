import React, { useCallback, useContext, useState } from 'react';

import { FaBell, FaSearch, FaBars, FaUser } from 'react-icons/fa';
import { shade } from 'polished';

import { FiSettings } from 'react-icons/fi';

import { AiOutlineLogout, AiFillAccountBook } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { useAuth } from '../../hooks/Auth';
import { Container, HeaderDropDown, InputSearch } from './style';
import { useSideBar } from '../../hooks/SideBar';
import { useModal } from '../../hooks/Modal';
import { useApp } from '../../hooks/App';
import HeaderMenuDropDown from './HeaderMenuDropdown';

const Header: React.FC = () => {
  const { colors, title } = useContext(ThemeContext);
  const { toogleTheme } = useApp();
  const { signOut, user } = useAuth();
  const [showDropDown, setShowDropDown] = useState(false);
  const { showOrHideSideBar } = useSideBar();
  const { comfirmAlert, removeAlert } = useModal();

  const imageAvatar = user.avatar
    ? `http://localhost:3333/files/${user.avatar}`
    : 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg';

  const handleSignOut = useCallback(() => {
    signOut();
    removeAlert();
  }, [signOut, removeAlert]);

  const openDropDown = () => {
    setShowDropDown((prev) => !prev);
  };

  const handleModal = useCallback(() => {
    comfirmAlert({
      title: 'Sair da sessão!',
      description: 'Deseja realmente sair da sessão?',
      button: {
        title: 'Sair',
        onClick: handleSignOut,
      },
    });
  }, [comfirmAlert, handleSignOut]);

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
            <HeaderMenuDropDown Icon={FaUser}>
              <HeaderDropDown>
                <div>
                  <img src={imageAvatar} alt="" />
                  <div>
                    <span>wellington santos</span>
                    <p>weltossousa@gmail.com</p>
                  </div>
                </div>
                <ul>
                  <li>
                    <i>
                      <AiFillAccountBook />
                    </i>
                    Account
                  </li>
                  <li>
                    <Link to={`collaborators/edit/${user.idColaborador}`}>
                      <i>
                        <FiSettings />
                      </i>
                      Setting
                    </Link>
                  </li>
                  <li onClick={handleModal} role="presentation">
                    <i>
                      <AiOutlineLogout />
                    </i>
                    Logout
                  </li>
                </ul>
              </HeaderDropDown>
            </HeaderMenuDropDown>
          </li>
          <li>
            <Switch
              onChange={toogleTheme}
              checked={title === 'dark'}
              checkedIcon={false}
              uncheckedIcon={false}
              onColor={shade(0.2, colors.secondary)}
              onHandleColor={colors.secondary}
              handleDiameter={20}
              boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
              activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
              height={10}
              width={38}
            />
          </li>
        </ul>
      </Container>
    </>
  );
};

export default Header;
