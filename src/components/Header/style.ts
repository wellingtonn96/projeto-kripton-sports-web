import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    visibility: visible;
    opacity: 1;
  }
`;
interface IPropsHeader {
  showSideBar: boolean;
}

export const Container = styled.header<IPropsHeader>`
  height: 60px;
  width: ${(props) => (props.showSideBar ? `82%` : '100%')};
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.065);
  padding: 20px;
  z-index: 10;
  align-items: center;
  transition: 0.3s;

  i {
    color: ${({ theme }) => theme.colors.text};
    font-size: 20px;
  }

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.065);
  }

  ul:first-child {
    flex: 1;
  }

  > ul {
    display: flex;
    align-items: center;

    > li {
      list-style: none;
      margin-left: 15px;

      &:first-child {
        margin-left: 0;
      }
    }
  }

  @media (max-width: 760px) {
    width: 100%;
  }
`;

export const InputSearch = styled.div`
  width: 300px;
  height: 30px;
  border-radius: 50px;
  border: 1px solid #888888;
  background-color: none;
  padding: 10px;
  display: flex;
  height: 30px;
  align-items: center;

  @media (max-width: 760px) {
    width: 100%;
  }

  input {
    background: transparent;
    color: ${({ theme }) => theme.colors.text};
    width: 100%;
    border: 0;
  }

  button {
    color: ${({ theme }) => theme.colors.text};
    display: flex;
    border: 0;
    background: transparent;
    cursor: pointer;
    margin-left: 10px;
  }
`;

export const HeaderDropDown = styled.li`
  position: absolute;
  right: 0;
  margin-top: 10px;
  margin-right: 5px;
  padding: 0;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 20px, rgba(0, 0, 0, 0.1) 0px 12px 13px,
    rgba(0, 0, 0, 0.09) 0px -3px 5px;
  animation: ${animation} 0.8s;

  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px;

    img {
      margin-right: 10px;
    }
  }

  ul {
    width: 100%;
    display: inline;

    li {
      display: flex;
      align-items: center;
      padding: 20px;

      span {
        font-weight: bold;
      }

      svg {
        margin-right: 20px;
      }

      &:hover {
        cursor: pointer;
        background: rgb(137, 49, 48);
        background: linear-gradient(
          90deg,
          rgba(137, 49, 48, 1) 0%,
          rgba(219, 58, 58, 1) 100%
        );
        color: #ffffff;

        i {
          color: #ffffff;
        }
      }
    }
  }
`;
