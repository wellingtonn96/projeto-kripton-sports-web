import React from 'react';

import {
  Container,
  Header,
  UserInfo,
  Aside,
  SideNav,
  Main,
  Nav,
  Footer,
} from './styles';

const Layout: React.FC = () => (
  <Container>
    <Header>
      <UserInfo>
        <span>
          <a href="//#endregion">
            <img
              src="https://i.pinimg.com/originals/3d/b9/8b/3db98be8ce86f84ad6b49c26293874ab.jpg"
              alt=""
            />
          </a>
        </span>
      </UserInfo>
    </Header>
    <Aside>
      <SideNav>
        <Nav />
        <Nav />
      </SideNav>
    </Aside>
    <Main />
    <Footer />
  </Container>
);

export default Layout;
