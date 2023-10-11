import { createContext } from 'react';


const UserContext = createContext({
  email: '',
  setEmail: () => {},
  resetEmail: () => {},
  token: '',
  setToken: () => {},
});

export default UserContext;