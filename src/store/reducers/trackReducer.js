const initialState = {
  track: [],
  error: null,
  volume: 0.5,
  isLoop: false,
  isPlaying: false,
  currentTrackIndex: 0,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_TRACK_LIST":
      return { ...state, track: action.payload };
    case "GET_TRACK_LIST_SET_ERROR":
      return { ...state, error: action.payload };
    case "SET_VOLUME":
      return { ...state, volume: action.payload };
    case 'TOGGLE_LOOP':
      return {...state, isLoop: !state.isLoop};
      case 'SET_PLAYING':
        return { ...state, isPlaying: action.payload };
    case "SET_NEXT_TRACK":
  return {
    ...state,
    currentTrackIndex: (state.currentTrackIndex + 1) % state.track.length,
    isPlaying: true
  };
      case "SET_PREVIOUS_TRACK":
        return {
          ...state,
          currentTrackIndex:
            state.currentTrackIndex > 0
              ? state.currentTrackIndex - 1
              : state.track.length - 1,
          isPlaying: true
        };
    default:
      return state;
  }
};

export default rootReducer;