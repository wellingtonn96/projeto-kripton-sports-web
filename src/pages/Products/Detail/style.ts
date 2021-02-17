import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  position: relative;
  font-size: 18px;
  background-color: #ffffff;
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

  div {
    width: 100%;
    margin: 10px 0;

    div {
      display: flex;
      justify-content: center;
      margin: 50px 0;

      img {
        width: 500px;
        margin: 0 auto;

        @media (max-width: 760px) {
          max-width: 100%;
          margin: 0 auto;
        }
      }
    }
  }
`;
