import styled from 'styled-components';

export const Container = styled.header`
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

export const HeaderDropwon = styled.li`
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
`;
