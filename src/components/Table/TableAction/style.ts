import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.td`
  button {
    border: 0;
    background: transparent;
    color: #999;
  }

  svg {
    margin-right: 10px;
  }
`;

interface ActionProps {
  visible: boolean;
}

export const Action = styled.div<ActionProps>`
  background-color: ${({ theme }) => theme.colors.primary};
  position: absolute;
  min-width: 150px;
  z-index: 10;
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  right: 10px;
  flex-direction: column;
  text-align: left;
  white-space: nowrap;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 20px, rgba(0, 0, 0, 0.1) 0px 12px 13px,
    rgba(0, 0, 0, 0.09) 0px -3px 5px;
  transition: 1.5s;

  div {
    display: flex;
    align-items: center;
    height: 50px;
    padding: 0 30px;
    transition: background-color 1.5s;

    &:hover {
      background: ${shade(0.1, '#ffffff')};
    }

    a {
      color: #999;
    }
  }
`;
