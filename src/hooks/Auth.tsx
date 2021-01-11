import React, { createContext, useCallback, useContext, useState } from 'react';

import api from '../services/api';

interface SignCredentials {
  login: string;
  password: string;
}

interface AuthContextData {
  signIn(creadentials: SignCredentials): Promise<void>;
  signOut(): void;
  user: UserType;
  token: string;
}

interface AuthState {
  token: string;
  user: UserType;
}

interface UserType {
  idColaborador: number;
  login: string;
  senha: string;
  email: string;
  nome: string;
  sobrenome: string;
  telefone: string;
  idTipo: number;
}

const AuthContext = createContext({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState(() => {
    const token = localStorage.getItem('@KriptonSportsSuplementos:token');
    const user = localStorage.getItem('@KriptonSportsSuplementos:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ login, password }) => {
    const response = await api.post('sessions', {
      login,
      password,
    });

    const { token, collaborator } = response.data;

    localStorage.setItem('@KriptonSportsSuplementos:token', token);
    localStorage.setItem(
      '@KriptonSportsSuplementos:user',
      JSON.stringify(collaborator)
    );

    setData({ token, user: collaborator });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@KriptonSportsSuplementos:token');
    localStorage.removeItem('@KriptonSportsSuplementos:user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{ user: data.user, token: data.token, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
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
