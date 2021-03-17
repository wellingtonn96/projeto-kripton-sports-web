import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  position: relative;
  font-size: 18px;
  background-color: ${({ theme }) => theme.colors.primary};

  border-radius: 0 0 5px 5px;
  box-shadow: 0 8px 16px 0 rgba(40, 40, 90, 0.09),
    0 3px 6px 0 rgba(0, 0, 0, 0.065);
  margin-top: 20px;
`;

export const DetailHeader = styled.div`
  width: 100%;
  padding: 15px 20px;
  border-bottom: 1px solid #888888;

  h1 {
    font-size: 18px;
    font-weight: 600;
  }
`;

export const DetailBody = styled.div`
  padding: 30px;
`;
