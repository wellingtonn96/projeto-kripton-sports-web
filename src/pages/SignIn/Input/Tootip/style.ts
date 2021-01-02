import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    text-align: center;
    width: 160px;
    background: #c53030;
    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    opacity: 1;
    transition: opacity 4s;
    visibility: hidden;
    position: absolute;
    bottom: calc(100% + 12px);
    left: 50%;
    transform: translateX(-55%);
    color: #ffffff;

    &::before {
      content: '';
      border-style: solid;
      border-color: #301c16 transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &:hover {
    span {
      opacity: 0;
      visibility: visible;
    }
  }
`;
