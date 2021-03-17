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

export const Container = styled.li`
  /* position: absolute;
  right: 0;
  margin-top: 10px;
  margin-right: 5px;
  padding: 0;
  display: block;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 20px, rgba(0, 0, 0, 0.1) 0px 12px 13px,
    rgba(0, 0, 0, 0.09) 0px -3px 5px;
  animation: ${animation} 0.8s;

  div {
    width: 100%;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.text};
    border-bottom: 1px solid #f5f5f5;
    padding: 20px;


  } */
`;
