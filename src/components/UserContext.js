import { createContext } from 'react';


const UserContext = createContext({
  // email: '',
  // setEmail: () => {},
  // resetEmail: () => {},
  // token: '',
  // setToken: () => {},
  filteredTracks: [],
  setFilteredTracks: () => {},
  selectedTracks: '',
  setSelectedTracks: () => {},
  selectedGenre: '',
  setSelectedGenre: () => {},
  selectedYear: '',
  setSelectedYear: () => {},
});

export default UserContext;