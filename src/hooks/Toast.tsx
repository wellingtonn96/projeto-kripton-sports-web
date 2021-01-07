import React, { createContext, useCallback, useContext, useState } from 'react';

import Toast from '../components/Toast';

export interface IMessageToastProps {
  id: string;
  type?: 'success' | 'info' | 'error';
  title: string;
  description: string;
}

interface ToastContextData {
  addToast(message: Omit<IMessageToastProps, 'id'>): void;
  removeToast(id: string): void;
}

const ToastContext = createContext({} as ToastContextData);

const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<IMessageToastProps[]>([]);

  const addToast = useCallback(
    ({ type, title, description }: Omit<IMessageToastProps, 'id'>) => {
      const data = {
        id: Math.random().toString(),
        type,
        title,
        description,
      };

      setMessages((prev) => [...prev, data]);
    },
    []
  );

  const removeToast = useCallback((id: string) => {
    setMessages((prev) => prev.filter((item) => item.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <Toast messages={messages} />
    </ToastContext.Provider>
  );
};

const useToast = (): ToastContextData => {
  const constext = useContext(ToastContext);

  return constext;
};

export { ToastProvider, useToast };
