import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 30px 20px;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 8px 16px 0 rgba(40, 40, 90, 0.09),
    0 3px 6px 0 rgba(0, 0, 0, 0.065) !important;
`;
