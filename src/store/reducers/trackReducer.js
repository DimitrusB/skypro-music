const initialState = {
  track: [],
  error: null,
  volume: 0.5,
  isLoop: false,
  isPlaying: false,
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
    case 'TOGGLE_PLAY':
      return{...state, isPlaying: !state.isPlaying}
    default:
      return state;
  }
};

export default rootReducer;