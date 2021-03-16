import React, { createContext, useContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { dark } from '../styles/themes/dark';
import { light } from '../styles/themes/light';

interface IAppContextData {
  toogleTheme(): void;
}

const AppContext = createContext({} as IAppContextData);

export const AppProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(light);

  const toogleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <AppContext.Provider value={{ toogleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </AppContext.Provider>
  );
};

export const useApp = (): IAppContextData => {
  const context = useContext(AppContext);

  return context;
};
