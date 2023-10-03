import React from 'react';

const TokenContext = React.createContext();

export function TokenProvider(props) {
  const [token, setToken] = React.useState(null);

  const value = { token, setToken };

  return (
    <TokenContext.Provider value={value}>
      {props.children}
    </TokenContext.Provider>
  );
}

export function useToken() {
  const context = React.useContext(TokenContext);
  if (!context) {
    throw new Error('useToken must be used within a TokenProvider');
  }
  return context;
}