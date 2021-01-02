import styled, { css } from 'styled-components';

import { Link } from 'react-router-dom';

interface IContainerProps {
  subMenuSelected?: boolean;
}

export const Container = styled(Link)<IContainerProps>`
  text-decoration: none;
  font-size: 15px;
  color: #888888;
  text-transform: capitalize;
  font-weight: 100;

  svg {
    color: #888888;
  }

  li {
    list-style: none;
    display: flex;
    align-items: center;
    list-style: none;
    padding: 10px;
    border-bottom: 1px solid #3a3a3a;

    ${(props) =>
      props.subMenuSelected &&
      css`
        background-color: #3a3a3a;
        border-left: 5px solid red;
        color: #ffffff;

        svg {
          color: #ffffff;
        }
      `}

    &:hover {
      background-color: #3a3a3a;
      border-left: 5px solid red;
      color: #ffffff;

      svg {
        color: white;
      }
    }
  }

  i {
    font-size: 18px;
    margin-right: 15px;
    color: #aaaaaa;
  }

  p {
    flex: 1;
  }
`;

export const SubMenuLinks = styled.ul<IContainerProps>`
  display: flex;
  background-color: #1a1a1a;
  font-weight: 100;
  transition: 2s;

  li {
    width: 100%;
    color: #aaaaaa;
    padding: 10px;

    i {
      margin-left: 5px;
      margin-right: 15px;
    }

    &:hover {
      color: #ffffff;

      svg {
        color: white;
      }
    }
  }
`;
