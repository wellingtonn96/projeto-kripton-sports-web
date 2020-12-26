import React, { useState } from 'react';

import {
  FaBarcode,
  FaShoppingCart,
  FaFolder,
  FaChartBar,
  FaCreditCard,
  FaUsers,
  FaTh,
  FaPlus,
} from 'react-icons/fa';

import { FiSettings } from 'react-icons/fi';

import { AiFillDashboard } from 'react-icons/ai';

import { Container } from './style';

import logoImg from '../../assets/logo.png';

const AsideMenu: React.FC = () => {
  const [menu] = useState(false);
  const [dropSidemenu, setDropSidemenu] = useState(false);

  return (
    <Container>
      <div>
        <img src={logoImg} alt="logo" />
      </div>
      <ul>
        <a href="/dashboard">
          <li>
            <i>
              <AiFillDashboard />
            </i>
            Dashboard
          </li>
        </a>
        <li>
          <i>
            <FaTh />
          </i>
          <a href=".">PDV</a>
        </li>
        <li
          onClick={() => setDropSidemenu(!dropSidemenu)}
          onKeyPress={() => setDropSidemenu(!menu)}
          role="presentation"
        >
          <i>
            <FaBarcode />
          </i>
          <a href=".">Produtos</a>
        </li>
        {dropSidemenu ? (
          <ul className="dropdown-sidemenu">
            <li>Account</li>
            <li>Account</li>
            <li>Setting</li>
            <li>Logout</li>
          </ul>
        ) : null}
        <li>
          <i>
            <FaFolder />
          </i>
          <a href=".">Categorias</a>
        </li>
        <li>
          <i>
            <FaShoppingCart />
          </i>
          <a href=".">Vendas</a>
        </li>
        <li>
          <i>
            <FaPlus />
          </i>
          <a href=".">Compras</a>
        </li>
        <li>
          <i>
            <FaCreditCard />
          </i>
          <a href=".">Cartães</a>
        </li>
        <li>
          <i>
            <FaUsers />
          </i>
          <a href=".">Pessoas</a>
        </li>
        <li>
          <i>
            <FiSettings />
          </i>
          <a href=".">Configurações</a>
        </li>
        <li>
          <i className="search">
            <FaChartBar />
          </i>
          <a href=".">Relatórios</a>
        </li>
      </ul>
    </Container>
  );
};

export default AsideMenu;
