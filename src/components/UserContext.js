import { createContext } from 'react';


const UserContext = createContext({
  userMail: '',
  setUserMail: () => {},
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