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
      background-color: #2a2a2a;
      border-left: 5px solid red;
    }
  }

  i {
    font-size: 18px;
    margin-right: 15px;
    color: #999999;
  }
`;
