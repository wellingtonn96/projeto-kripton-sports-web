import React, { createContext, useContext, useState } from 'react';

interface ModalContextData {
  removeAlert(): void;
  comfirmAlert(item: AlertProps): void;
  alert: AlertProps | null;
}

const ModalContex = createContext({} as ModalContextData);

interface AlertProps {
  title: string;
  description: string;
  button: {
    title: string;
    onClick(): void;
  };
}

const ModalProvider: React.FC = ({ children }) => {
  const [alert, setAlert] = useState<AlertProps | null>(null);

  const removeAlert = () => {
    setAlert(null);
  };

  const comfirmAlert = (item: AlertProps) => {
    setAlert(item);
  };

  return (
    <ModalContex.Provider value={{ removeAlert, comfirmAlert, alert }}>
      {children}
    </ModalContex.Provider>
  );
};

const useModal = (): ModalContextData => {
  const context = useContext(ModalContex);

  return context;
};

export { ModalProvider, useModal };
