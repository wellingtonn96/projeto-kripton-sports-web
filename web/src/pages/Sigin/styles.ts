import styled from 'styled-components';
import { lighten } from 'polished';

import kriptonLogo from '../../assets/kriptonLogo.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
`;

export const Content = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 200px;

  form {
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 46px;
    }

    input {
      width: 350px;
      height: 46px;
      padding: 16px;
      margin-top: 32px;
      background: ${lighten(0.04, '#2d2b2c')};
      border: 2px solid #f4ede8;
      border-radius: 7px;
      font-size: 18px;
      color: #fff;

      & + input {
        margin-top: 10px;
      }

      &::placeholder {
        color: #666360;
      }
    }

    button {
      width: 350px;
      height: 46px;
      margin-top: 20px;
      background: #fe1212;
      color: #fff;
      font-size: 20px;
      font-weight: 500;
      border-style: none;
      border-radius: 7px;
    }

    a {
      margin-top: 24px;
    }
  }

  > a {
    margin-top: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;

    svg {
      margin-right: 16px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${kriptonLogo}) no-repeat center;
`;
