import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    width: 160px;
    padding: 8px;
    border-radius: 4px solid red;
    background: #c53030;
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    position: absolute;
    bottom: 100%;
    opacity: 0;
    left: 0;
    visibility: hidden;
    transition: opacity 0.4s;
    transform: translateX(-50%);

    &::before {
      content: '';
      border-style: solid;
      border-color: #c53030 transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      position: absolute;
      left: 47%;
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
