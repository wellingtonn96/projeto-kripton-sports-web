import styled from 'styled-components';

export const Container = styled.aside`
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
