import { createContext } from 'react';


const UserContext = createContext({
  email: '',
  setEmail: () => {},
  resetEmail: () => {},
  token: null,
  setToken: () => {},
});

export default UserContext;