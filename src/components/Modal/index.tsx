import React from 'react';
import { MdClose } from 'react-icons/md';
// import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';

// import { MdClose } from 'react-icons/md';

const LightBox = styled.div`
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

const ModalWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  border-radius: 10px;
  width: 600px;
  background-color: white;
  box-shadow: 0 8px 16px 0 rgba(40, 40, 90, 0.09),
    0 3px 6px 0 rgba(0, 0, 0, 0.065) !important;

  @media (max-width: 720px) {
    width: 100%;
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 10;
  padding: 0;
  font-size: 30px;
`;

const Header = styled.div`
  width: 100%;
  border-bottom: 2px solid #eeee;
  padding: 30px 20px;

  h1 {
    font-weight: 300;
    font-size: 24px;
  }
`;

const Content = styled.div`
  padding: 20px 30px;
  border-bottom: 2px solid #eeee;
`;

const Footer = styled.div`
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
    background: red;
    color: white;

    &:hover {
    }
  }

  button + button {
    background: #cccc;
    color: #111111;
  }
`;
// interface IModalWrapperProps {
//   showModal: boolean;
// }

// const ModalWrapper = styled.div<IModalWrapperProps>`
//   width: 800px;
//   height: 500px;
//   box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
//   background: #fff;
//   color: #000;
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   position: relative;
//   z-index: 10;
//   border-radius: 10px;
// `;

// const ModalContent = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   line-height: 1.8;
//   color: #141414;
//   p {
//     margin-bottom: 1rem;
//   }
//   button {
//     padding: 10px 24px;
//     background: #141414;
//     color: #fff;
//     border: none;
//   }
// `;

// const CloseModalButton = styled(MdClose)`
//   cursor: pointer;
//   position: absolute;
//   top: 20px;
//   right: 20px;
//   width: 32px;
//   height: 32px;
//   padding: 0;
//   z-index: 10;
// `;

// interface IPropsModal {
//   showModal: boolean;
//   setShowModal?: React.Dispatch<React.SetStateAction<boolean>>;
// }

// interface IPropsModal {
//   header: string;
// }

export const Modal: React.FC = () => {
  // const modalRef = useRef<HTMLInputElement>(null);

  // const animation = useSpring({
  //   config: {
  //     duration: 250,
  //   },
  //   opacity: showModal ? 1 : 0,
  //   transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  // });

  // const closeModal = (e: React.MouseEvent<HTMLInputElement>) => {
  //   if (modalRef.current === e.target) {
  //     setShowModal(false);
  //   }
  // };

  // const keyPress = useCallback(
  //   (e) => {
  //     if (e.key === 'Escape' && showModal) {
  //       setShowModal(false);
  //     }
  //   },
  //   [setShowModal, showModal]
  // );

  // useEffect(() => {
  //   document.addEventListener('keydown', keyPress);
  //   return () => document.removeEventListener('keydown', keyPress);
  // }, [keyPress]);

  return (
    <>
      {
        true && (
          <LightBox>
            <ModalWrapper>
              <Header>
                <h1>Sair da sessão?</h1>
                <CloseModalButton />
              </Header>
              <Content>
                <p>Deseja realmente sair da sessão</p>
              </Content>
              <Footer>
                <button type="button">Sair</button>
                <button type="button">Cancelar</button>
              </Footer>
            </ModalWrapper>
          </LightBox>
        )
        // <Background onClick={closeModal} ref={modalRef}>
        //   <animated.div style={animation}>
        //     <ModalWrapper showModal={showModal}>
        //       <ModalContent>
        //         <h1>Are you ready?</h1>
        //         <p>Get exclusive access to our next launch.</p>
        //         <button type="button">Join Now</button>
        //       </ModalContent>
        //       <CloseModalButton
        //         aria-label="Close modal"
        //         onClick={() => setShowModal((prev) => !prev)}
        //       />
        //     </ModalWrapper>
        //   </animated.div>
        // </Background>
      }
    </>
  );
};
