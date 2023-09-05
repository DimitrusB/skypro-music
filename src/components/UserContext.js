import { createContext } from 'react';

const UserContext = createContext({
  email: '',
  setEmail: () => {},
});

export default UserContext;