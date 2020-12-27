import React, { useState } from 'react';

import { FaBell, FaSearch, FaBars } from 'react-icons/fa';

import { FiSettings } from 'react-icons/fi';

import { AiOutlineLogout, AiFillAccountBook } from 'react-icons/ai';
import { Container, MenuDropDown } from './style';
import perfilImg from '../../assets/img_ws.jpg';

const Header: React.FC = () => {
  const [menu, setMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);

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
              onClick={() => setMenu(!menu)}
              onKeyPress={() => setMenu(!menu)}
              role="presentation"
            />
            {menu && (
              <MenuDropDown>
                <li>
                  <img src={perfilImg} alt="" />
                  <div>
                    <span>wellington santos</span>
                    <p>weltossousa@gmail.com</p>
                  </div>
                </li>
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
                <li>
                  <i>
                    <AiOutlineLogout />
                  </i>
                  Logout
                </li>
              </MenuDropDown>
            )}
          </li>
        </ul>
      </Container>
    </>
  );
};

export default Header;
