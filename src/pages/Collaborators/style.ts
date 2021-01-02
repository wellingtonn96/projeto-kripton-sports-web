import styled from 'styled-components';

export const FormContainer = styled.div`
  width: 100%;
  padding: 30px 20px;
  background-color: white;
  box-shadow: 0 8px 16px 0 rgba(40, 40, 90, 0.09),
    0 3px 6px 0 rgba(0, 0, 0, 0.065) !important;
`;

export const ButtonGroup = styled.div`
  display: flex;
  margin-top: 20px;
  border-top: 1px solid #cccc;
  align-items: center;
  width: 100%;
  padding-top: 20px;
`;

export const ButtonCancel = styled.button`
  padding: 10px;
  border-radius: 5px;
  border: none;
  margin: 5px;
  font-size: 14px;
  text-transform: uppercase;
  background-color: gray;
  color: white;
  font-weight: 900;
  box-shadow: 0 8px 16px 0 rgba(207, 10, 10, 0.09),
    0 3px 6px 0 rgba(214, 39, 16, 0.065) !important;

  &:hover {
    opacity: 0.8;
  }
`;

export const ButtonSave = styled.button`
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
