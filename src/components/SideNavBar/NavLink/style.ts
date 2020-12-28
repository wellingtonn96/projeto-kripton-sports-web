import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  text-decoration: none;
  font-size: 15px;
  color: #999999;

  li {
    list-style: none;
    display: flex;
    align-items: center;
    list-style: none;
    padding: 10px;
    border-bottom: 1px solid #141414;

    &:hover {
      background-color: #3a3a3a;
      border-left: 5px solid red;
    }
  }

  i {
    font-size: 18px;
    margin-right: 15px;
    color: #999999;
  }

  p {
    flex: 1;
  }
`;

export const SubMenuLinks = styled.ul`
  display: flex;
  background-color: #1a1a1a;

  li {
    width: 100%;
    color: #999999;
    padding: 10px;
    border-bottom: 1px solid #141414;

    i {
      margin-left: 20px;
      margin-right: 15px;
    }

    &:hover {
      background-color: #2a2a2a;
      border-left: 5px solid red;
    }
  }
`;
