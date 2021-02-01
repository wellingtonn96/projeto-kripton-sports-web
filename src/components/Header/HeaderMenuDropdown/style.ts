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

export const Container = styled.div`
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
  animation: ${animation} 0.8s;

  li {
    width: 100%;
    display: flex;
    align-items: center;
    color: #2e2e2e;
    border-bottom: 1px solid #f5f5f5;

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
`;
