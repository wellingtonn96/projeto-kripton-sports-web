import React, { useState } from 'react';

import {
  FaBarcode,
  FaShoppingCart,
  FaBell,
  FaSearch,
  FaFolder,
  FaBars,
  FaChartBar,
  FaCreditCard,
  FaUsers,
  FaTh,
  FaPlus,
} from 'react-icons/fa';

import { FiSettings, FiUser } from 'react-icons/fi';

import {
  AiFillDashboard,
  AiOutlineLogout,
  AiFillAccountBook,
} from 'react-icons/ai';

import {
  Container,
  AsideMenu,
  Main,
  Header,
  MenuDropDown,
  Footer,
  Content,
  CardContainer,
  Card,
  DataTable,
} from './style';

import logoImg from '../../assets/logo.png';
import perfilImg from '../../assets/img_ws.jpg';

const Dashboard: React.FC = () => {
  const [menu, setMenu] = useState(false);
  const [dropSidemenu, setDropSidemenu] = useState(false);

  return (
    <div>
      <Container>
        <AsideMenu>
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
              <a href="link-item">PDV</a>
            </li>
            <li
              onClick={() => setDropSidemenu(!dropSidemenu)}
              onKeyPress={() => setDropSidemenu(!menu)}
              role="presentation"
            >
              <i>
                <FaBarcode />
              </i>
              <a href="link-item">Produtos</a>
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
              <a href="link-item">Categorias</a>
            </li>
            <li>
              <i>
                <FaShoppingCart />
              </i>
              <a href="link-item">Vendas</a>
            </li>
            <li>
              <i>
                <FaPlus />
              </i>
              <a href="link-item">Compras</a>
            </li>
            <li>
              <i>
                <FaCreditCard />
              </i>
              <a href="link-item">Cartães</a>
            </li>
            <li>
              <i>
                <FaUsers />
              </i>
              <a href="link-item">Pessoas</a>
            </li>
            <li>
              <i>
                <FiSettings />
              </i>
              <a href="link-item">Configurações</a>
            </li>
            <li>
              <i className="search">
                <FaChartBar />
              </i>
              <a href="link-item">Relatórios</a>
            </li>
          </ul>
        </AsideMenu>
        <Main>
          <Header>
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
                {menu ? (
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
                ) : null}
              </li>
            </ul>
          </Header>

          <Content>
            <CardContainer>
              <Card>
                <div>
                  <p>2050</p>
                  <p>Orders</p>
                </div>
                <div>
                  <span>
                    <FiUser />
                  </span>
                </div>
              </Card>
              <Card>
                <div>
                  <p>2050</p>
                  <p className="card-title">Orders</p>
                </div>
                <div>
                  <span>
                    <FiUser />
                  </span>
                </div>
              </Card>
              <Card>
                <div>
                  <p className="card-total">2050</p>
                  <p className="card-title">Orders</p>
                </div>
                <div>
                  <span>
                    <FiUser />
                  </span>
                </div>
              </Card>
              <Card>
                <div>
                  <p className="card-total">2050</p>
                  <p className="card-title">Orders</p>
                </div>
                <div>
                  <span>
                    <FiUser />
                  </span>
                </div>
              </Card>
            </CardContainer>

            <DataTable>
              <div>
                <h1>Product Sales</h1>
              </div>
              <div>
                <table>
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Photo</th>
                      <th>Product ID</th>
                      <th>Status</th>
                      <th>Shipping</th>
                      <th>Amount</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tr>
                    <td>Iphone 5</td>
                    <td>image</td>
                    <td>#9405822</td>
                    <td>Paid</td>
                    <td>dsfsd</td>
                    <td>$ 1250.00</td>
                    <td>03 Aug 2017</td>
                  </tr>
                  <tr>
                    <td>Iphone 5</td>
                    <td>image</td>
                    <td>#9405822</td>
                    <td>Paid</td>
                    <td>dsfsd</td>
                    <td>$ 1250.00</td>
                    <td>03 Aug 2017</td>
                  </tr>
                  <tr>
                    <td>Iphone 5</td>
                    <td>image</td>
                    <td>#9405822</td>
                    <td>Paid</td>
                    <td>dsfsd</td>
                    <td>$ 1250.00</td>
                    <td>03 Aug 2017</td>
                  </tr>
                  <tr>
                    <td>Iphone 5</td>
                    <td>image</td>
                    <td>#9405822</td>
                    <td>Paid</td>
                    <td>dsfsd</td>
                    <td>$ 1250.00</td>
                    <td>03 Aug 2017</td>
                  </tr>
                </table>
              </div>
            </DataTable>
          </Content>

          <Footer>
            <p>Krypton Suplementos © 2020 | Todos os direitos reservados.</p>
          </Footer>
        </Main>
      </Container>
    </div>
  );
};

export default Dashboard;
