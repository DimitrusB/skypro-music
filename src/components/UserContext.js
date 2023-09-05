import { createContext } from 'react';

const UserContext = createContext({
  email: '',
  setEmail: () => {},
  resetEmail: () => {},
});

export default UserContext;