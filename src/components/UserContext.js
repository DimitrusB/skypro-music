import { createContext } from 'react';


const UserContext = createContext({
  email: '',
  setEmail: () => {},
  resetEmail: () => {},
  token: '',
  setToken: () => {},
  filteredTracks: '',
  setFilteredTracks: () => {}
});

export default UserContext;