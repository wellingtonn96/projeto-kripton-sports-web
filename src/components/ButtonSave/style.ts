import styled from 'styled-components';

export const Container = styled.button`
  padding: 10px;
  border-radius: 5px;
  border: none;
  margin: 5px;
  font-size: 14px;
  text-transform: uppercase;
  background-color: rgb(255, 41, 41);
  color: white;
  font-weight: 900;
  box-shadow: 0 8px 16px 0 rgba(58, 212, 27, 0.09),
    0 3px 6px 0 rgba(154, 241, 14, 0.065) !important;

  &:hover {
    opacity: 0.8;
  }
`;
