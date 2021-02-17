import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 250px;
  justify-content: center;
  align-items: center;

  label {
    width: 200px;
    height: 200px;
    cursor: pointer;
    transition: opacity 0.2s;
    border: 0;
    color: #494949;
    border-radius: 50%;

    padding: 5px;

    &:hover {
      opacity: 0.7;
    }

    div {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      border: 2px dashed gray;

      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      strong {
        margin-top: 5px;
        color: gray;
      }
    }

    img {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      border: 2px solid rgba(255, 255, 255, 0.3);
      background: #494949;
    }

    input {
      display: none;
    }
  }
`;
