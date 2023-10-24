import { createContext } from "react";

const UserContext = createContext({
  // email: '',
  // setEmail: () => {},
  // resetEmail: () => {},
  // token: '',
  // setToken: () => {},
  filteredTracks: [],
  setFilteredTracks: () => {},
  selectedTracks: [],
  setSelectedTracks: () => {},
  selectedGenres: [],
  setSelectedGenres: () => {},
  selectedYears: [],
  setSelectedYears: () => {},
  isLoading: true,
  setIsLoading: ()=>{},
});

export default UserContext;
