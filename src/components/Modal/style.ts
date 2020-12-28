import { MdClose } from 'react-icons/md';
// import { useSpring, animated } from 'react-spring';
import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

export const appearFromMiddle = keyframes`
  from {
    opacity: 0;
    transform:translateY(-100%)
  } to {
    opacity: 1;
    transform: translateY(0%)
  }
`;

export const LightBox = styled.div`
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgba(0, 0, 0, 0.6); /* Black w/ opacity */
  padding: 60px 20px;
`;

export const ModalWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  border-radius: 10px;
  width: 600px;
  background-color: white;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.4);
  animation: ${appearFromMiddle} 0.3s;

  @media (max-width: 720px) {
    width: 100%;
  }
`;

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 10;
  padding: 0;
  font-size: 30px;
  transition: color 0.2s;

  &:hover {
    opacity: 0.5;
  }
`;

export const Header = styled.div`
  width: 100%;
  border-bottom: 2px solid #eeee;
  padding: 30px 20px;

  h1 {
    font-weight: 300;
    font-size: 24px;
  }
`;

export const Content = styled.div`
  padding: 20px 30px;
  border-bottom: 2px solid #eeee;
`;

export const Footer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: row-reverse;

  button {
    padding: 10px;
    border-radius: 5px;
    border: 0;
    text-transform: capitalize;
    right: 0;
    margin-left: 5px;
    background: #f40e0e;
    color: white;
    transition: background-color 0.3s;

    &:hover {
      background: ${shade(0.2, '#F40E0E')};
    }
  }

  button + button {
    background: #cccc;
    color: #111111;
    transition: background-color 0.3s;

    &:hover {
      background: ${shade(0.2, '#cccc')};
    }
  }
`;
