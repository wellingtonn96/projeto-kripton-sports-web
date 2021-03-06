import styled from 'styled-components';
import { shade } from 'polished';

import background from '../../assets/background2.jpg';

export const Container = styled.div`
  background: url(${background}) no-repeat center;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 430px;
  height: 500px;
  background-color: white;
  border-radius: 5px;
  font-weight: 500;
  color: #707070;

  img {
    display: flex;
    margin: 0 auto;
    margin-bottom: 20px;
  }

  form {
    width: 300px;

    button {
      width: 300px;
      height: 45px;
      border: none;
      font-size: 14px;
      font-weight: bold;
      margin-bottom: 20px;
      border-radius: 50px;
      text-transform: capitalize;
      background: linear-gradient(
        90deg,
        #ffff 0%,
        rgba(253, 29, 29, 1) 0%,
        rgba(183, 30, 34, 1) 0%,
        rgba(244, 120, 120, 1) 100%
      );
      box-shadow: 0 8px 16px 0 rgba(40, 40, 90, 0.09),
        0 3px 6px 0 rgba(0, 0, 0, 0.065);
      color: white;

      &:hover {
        background: ${shade(0.4, 'red')};
      }
    }
  }

  p {
    color: #707070;
    font-size: 14px;

    a {
      margin-left: 2px;
      text-decoration: transparent;
      color: #909090;
      font-size: 14px;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
