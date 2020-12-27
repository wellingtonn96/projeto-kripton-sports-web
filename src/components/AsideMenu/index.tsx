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
  FaRegCircle,
} from 'react-icons/fa';

import { FiSettings } from 'react-icons/fi';

import { AiFillDashboard } from 'react-icons/ai';

import { Link } from 'react-router-dom';
import { Container } from './style';

import logoImg from '../../assets/logo.png';

const AsideMenu: React.FC = () => {
  const [dropSidemenu, setDropSidemenu] = useState(false);

  return (
    <Container>
      <div>
        <img src={logoImg} alt="logo" />
      </div>
      <ul>
        <Link to="/dashboard">
          <li>
            <i>
              <AiFillDashboard />
            </i>
            Dashboard
          </li>
        </Link>
        <Link to="/collaborators">
          <li>
            <i>
              <FaUsers />
            </i>
            Colaboradores
          </li>
        </Link>
        <Link to="?">
          <li>
            <i>
              <FaTh />
            </i>
            PDV
          </li>
        </Link>
        <Link
          to="/collaborators"
          onClick={() => setDropSidemenu(!dropSidemenu)}
        >
          <li>
            <i>
              <FaBarcode />
            </i>
            Produtos
          </li>
        </Link>
        {dropSidemenu && (
          <ul className="dropdown-sidemenu">
            <li>
              <FaRegCircle />
              <p>Account</p>
            </li>
            <li>
              <FaRegCircle />
              <p>Account</p>
            </li>
            <li>
              <FaRegCircle />
              <p>Account</p>
            </li>
            <li>
              <FaRegCircle />
              <p>Account</p>
            </li>
          </ul>
        )}
        <Link to="/collaborators">
          <li>
            <i>
              <FaFolder />
            </i>
            Categorias
          </li>
        </Link>
        <Link to="/collaborators">
          <li>
            <i>
              <FaShoppingCart />
            </i>
            Vendas
          </li>
        </Link>
        <Link to="/collaborators">
          <li>
            <i>
              <FaPlus />
            </i>
            Compras
          </li>
        </Link>
        <Link to="/collaborators">
          <li>
            <i>
              <FaCreditCard />
            </i>
            Cartães
          </li>
        </Link>
        <Link to="/collaborators">
          <li>
            <i>
              <FaUsers />
            </i>
            Pessoas
          </li>
        </Link>
        <Link to="/collaborators">
          <li>
            <i>
              <FiSettings />
            </i>
            Configurações
          </li>
        </Link>
        <Link to="/collaborators">
          <li>
            <i className="search">
              <FaChartBar />
            </i>
            Relatórios
          </li>
        </Link>
      </ul>
    </Container>
  );
};

export default AsideMenu;
