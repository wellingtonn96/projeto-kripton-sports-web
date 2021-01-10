import styled, { css } from 'styled-components';

import { NavLink } from 'react-router-dom';

interface IPropsContainer {
  subMenuSelected: boolean;
}

export const Container = styled(NavLink)<IPropsContainer>`
  text-decoration: none;
  font-size: 15px;
  color: #9b9b9b;
  text-transform: capitalize;
  font-weight: 100;

  &.selected {
    li {
      background: rgb(137, 49, 48);
      background: linear-gradient(
        90deg,
        rgba(137, 49, 48, 1) 0%,
        rgba(219, 58, 58, 1) 100%
      );
      color: #fff8f8;
      transition: background-color 2s;

      svg {
        color: white;
      }
    }
  }

  svg {
    color: #9b9b9b;
  }

  li {
    list-style: none;
    display: flex;
    align-items: center;
    list-style: none;
    padding: 10px;
    border-bottom: 1px solid #1e1e1e;
    transition: background-color 2s;

    ${(props) =>
      props.subMenuSelected &&
      css`
        background: rgb(137, 49, 48);
        background: linear-gradient(
          90deg,
          rgba(137, 49, 48, 1) 0%,
          rgba(219, 58, 58, 1) 100%
        );
        color: #fff8f8;

        svg {
          color: white;
        }
      `}

    &:hover {
      background: rgb(137, 49, 48);
      background: linear-gradient(
        90deg,
        rgba(137, 49, 48, 1) 0%,
        rgba(219, 58, 58, 1) 100%
      );
      color: #fff8f8;

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

export const SubMenuLinks = styled(NavLink)`
  display: flex;
  background-color: #1a1a1a;
  font-weight: 100;
  transition: 2s;

  &.selected {
    li {
      color: #fff8f8;

      svg {
        color: #fff8f8;
      }
    }
  }

  li {
    display: flex;
    align-items: center;
    width: 100%;
    height: 30px;
    text-transform: capitalize;
    color: #9b9b9b;

    i {
      margin-left: 20px;
      margin-right: 15px;
    }

    &:hover {
      color: #fff8f8;

      svg {
        color: white;
      }
    }
  }
`;
