import styled from 'styled-components';

export const DataTable = styled.div`
  width: 100%;
  position: relative;
  font-size: 18px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 0 0 5px 5px;
  box-shadow: 0 8px 16px 0 rgba(40, 40, 90, 0.09),
    0 3px 6px 0 rgba(0, 0, 0, 0.065);
  margin-top: 20px;
`;

export const TableHeader = styled.div`
  width: 100%;
  padding: 15px 20px;
  border-bottom: 1px solid #888888;

  h1 {
    font-size: 18px;
    font-weight: 600;
  }
`;

export const TableBody = styled.div`
  padding: 20px;

  > div:first-child {
    padding: 20px;
    margin-bottom: 10px;
    width: 100%;
    display: flex;
    align-items: center;
    height: 50px;

    button {
      width: 120px;
      background: #2bcb6b;
      border: none;
      color: white;
      padding: 5px 0;
      font-weight: 600;
    }

    div {
      flex: 1;

      input {
        width: 200px;
      }
    }
  }

  div + div {
    overflow-x: auto;
    border-collapse: collapse;

    table {
      width: 100%;
      text-align: left;
      font-size: 16px;
      margin-bottom: 30px;
      border-collapse: collapse;

      th {
        height: 60px;
        background: ${({ theme }) =>
          theme.title === 'dark' ? '#333333' : '#ffffff'};
        text-align: center;
        padding: 0 20px;
        border: 0;
        text-transform: uppercase;
      }

      th {
        color: ${({ theme }) =>
          theme.title === 'dark' ? '#c13030' : '#1a1a1a'};
      }

      tr:nth-child(odd) {
        background: ${({ theme }) =>
          theme.title === 'dark' ? '#222222' : '#f1f1f1'};
        color: #666666;
      }

      tr {
        background: ${({ theme }) =>
          theme.title === 'dark' ? '#1a1a1a' : '#ffff'};
        color: #666666;
      }

      td {
        height: 60px;
        padding: 0 20px;
        text-align: center;
      }
    }
  }
`;
