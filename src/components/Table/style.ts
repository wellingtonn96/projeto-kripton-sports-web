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
  padding: 30px;

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

      td,
      th {
        text-align: center;
        padding: 10px 0;
        border-top: 1px solid #dddddd;
      }

      th {
        color: ${({ theme }) => theme.colors.text};
      }

      td {
        color: ${({ theme }) => theme.colors.text};
      }
    }
  }
`;
