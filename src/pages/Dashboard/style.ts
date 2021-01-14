import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
`;

export const AsideMenu = styled.aside`
  position: fixed;
  width: 18%;
  height: 100vh;
  background-color: #222222;
  font-weight: 500;

  div {
    background-color: #ffffff;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;

    img {
      height: 60px;
    }
  }

  ul {
    li {
      list-style: none;
      display: flex;
      align-items: center;
      list-style: none;
      padding: 10px;
      border-bottom: 1px solid #141414;

      &:hover {
        background-color: #2e2e2e;
        border-left: 5px solid red;
      }
    }

    i {
      font-size: 18px;
      margin-right: 15px;
      color: #999999;
    }

    a {
      text-decoration: none;
      font-size: 15px;
      color: #999999;
    }
  }

  @media (max-width: 760px) {
    display: none;
  }
`;

export const Main = styled.main`
  width: 82%;
  margin-left: 18%;

  @media (max-width: 760px) {
    width: 100%;
    margin-left: 0;
  }
`;

export const Header = styled.header`
  width: 82%;
  height: 60px;
  display: flex;
  position: fixed;
  background-color: #ffffff;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.065);
  padding: 20px;

  i {
    color: #888888;
    font-size: 20px;
    margin: 20px;
  }

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.065);
  }

  ul {
    display: flex;
    align-items: center;

    li {
      list-style: none;

      input {
        width: 300px;
        height: 30px;
        border-radius: 50px;
        border: 1px solid #888888;
        background-color: none;
        margin: 10px;
        padding: 10px;

        @media (max-width: 760px) {
          width: 100%;
        }
      }
    }
  }

  @media (max-width: 760px) {
    width: 100%;
  }
`;

export const MenuDropDown = styled.div`
  position: absolute;
  right: 0;
  margin-top: 10px;
  margin-right: 5px;
  padding: 0;
  display: block;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 8px 16px 0 rgba(40, 40, 90, 0.09),
    0 3px 6px 0 rgba(0, 0, 0, 0.065) !important;

  li:first-child {
    padding: 10px 20px;

    img {
      margin-right: 10px;
      width: 50px;
      height: 50px;
    }

    span {
      font-size: 18px;
      font-weight: 800;
    }
  }

  li {
    width: 100%;
    display: flex;
    align-items: center;
    color: #2e2e2e;
    border-bottom: 1px solid #f5f5f5;

    &:hover {
      background-color: #2a2a2a;
      color: #ffffff;

      i {
        color: #ffffff;
      }
    }
  }
`;

export const Content = styled.div`
  margin-top: 60px;
  padding: 20px;
`;

export const Footer = styled.div`
  width: 100%;
  font-size: 15px;
  text-align: center;
  padding: 20px;
  background-color: #ffffff;

  @media (max-width: 760px) {
    width: 100%;
    margin-top: 0;
  }
`;

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 760px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const Card = styled.div`
  width: 24%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2e2e2e;
  box-shadow: 0 8px 16px 0 rgba(40, 40, 90, 0.09),
    0 3px 6px 0 rgba(0, 0, 0, 0.065);
  color: #ffffff;
  padding: 23px;
  border-radius: 5px;

  p {
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 10px;
  }

  p + p {
    font-size: 15px;
  }

  span {
    font-size: 40px;
  }

  @media (max-width: 760px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;
