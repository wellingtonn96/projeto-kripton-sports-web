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
  FormContainer,
  FormHeader,
  FormGroup,
  ButtonGroup,
  ButtonCancel,
  ButtonSave,
} from './style';

import logoImg from '../../assets/logo.png';
import perfilImg from '../../assets/img_ws.jpg';

const Collaborators: React.FC = () => {
  const [menu, setMenu] = useState(false);
  const [dropSidemenu, setDropSidemenu] = useState(false);

  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [comfirmPass, setComfirmPass] = useState('');
  const [typeUser, setTypeUser] = useState('');

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
            <FormContainer>
              <h1>Cadastrar colaborador</h1>
              <form>
                <FormHeader>
                  <i>
                    <FiUser />
                  </i>
                  <h4>Informações Pessoais</h4>
                </FormHeader>
                <FormGroup>
                  <span>Nome</span>
                  <input
                    name="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </FormGroup>

                <FormGroup>
                  <span>Sobrenome</span>
                  <input
                    name="lastname"
                    type="text"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                  />
                </FormGroup>

                <FormGroup>
                  <span>Email</span>
                  <input
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormGroup>

                <FormGroup>
                  <span>Telefone</span>
                  <input
                    name="phone"
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </FormGroup>
                <FormHeader>
                  <i>
                    <FiUser />
                  </i>
                  <h4>Perfil de usuário</h4>
                </FormHeader>
                <FormGroup>
                  <span>Login</span>
                  <input
                    name="login"
                    type="text"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                  />
                </FormGroup>

                <FormGroup>
                  <span>Senha</span>
                  <input
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormGroup>

                <FormGroup>
                  <span>Comfirmar senha</span>
                  <input
                    name="comfirmPass"
                    type="password"
                    value={comfirmPass}
                    onChange={(e) => setComfirmPass(e.target.value)}
                  />
                </FormGroup>

                <FormGroup>
                  <span>Tipo usuario:</span>
                  <select
                    name="userType"
                    value={typeUser}
                    onChange={(e) => setTypeUser(e.target.value)}
                  >
                    <option value="1">GERENTE</option>
                    <option value="2">VENDEDOR</option>
                  </select>
                </FormGroup>

                <ButtonGroup>
                  <ButtonCancel type="button">cancelar</ButtonCancel>
                  <ButtonSave type="submit">salvar</ButtonSave>
                </ButtonGroup>
              </form>
            </FormContainer>
          </Content>

          <Footer>
            <p>Krypton Suplementos © 2020 | Todos os direitos reservados.</p>
          </Footer>
        </Main>
      </Container>
    </div>
  );
};

export default Collaborators;
