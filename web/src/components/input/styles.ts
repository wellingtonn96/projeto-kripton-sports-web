import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 16px;
  background: #202020;
  border-radius: 10px;
  display: flex;
  border: 1px solid #393939;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 8px;
  }

  & + div {
    margin-top: 12px;
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #f4ede8;
    font-size: 18px;
  }

  & ::placeholder {
    color: #666360;
  }
`;
