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
  background-color: #ffff;
  position: absolute;
  min-width: 150px;
  z-index: 10;
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  right: 10px;
  flex-direction: column;
  text-align: left;
  white-space: nowrap;
  box-shadow: 0 8px 16px 0 rgba(40, 40, 90, 0.1), 0 3px 6px 0 rgba(0, 0, 0, 0.1);
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
