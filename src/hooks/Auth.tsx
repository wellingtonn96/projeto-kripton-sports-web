import React, { createContext, useCallback, useContext } from 'react';

import api from '../services/api';

interface SignCredentials {
  login: string;
  password: string;
}

interface AuthContextData {
  signIn(creadentials: SignCredentials): Promise<void>;
}

const AuthContext = createContext({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const signIn = useCallback(async ({ login, password }) => {
    const response = await api.post('sessions', {
      login,
      password,
    });

    console.log(response.data);
  }, []);

  return (
    <AuthContext.Provider value={{ signIn }}>{children}</AuthContext.Provider>
  );
};

const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('use auth must be used within an auth provider');
  }

  return context;
};

export { AuthProvider, useAuth };
