const initialState = {
    track: null,
    author: null,
    trackfile: null,
  };
  
  const trackReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_TRACK':
        return {
          ...state,
          track: action.payload.track,
          author: action.payload.author,
          trackfile: action.payload.trackfile,
        };
      case 'RESET_TRACK':
        return initialState;
      default:
        return state;
    }
  };
  
  export default trackReducer;