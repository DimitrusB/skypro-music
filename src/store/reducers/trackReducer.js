const initialState = {
  todos: [],
  error: null,
  volume: 0.5,
  isLoop: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_TRACK_LIST":
      return { ...state, todos: action.payload };
    case "GET_TRACK_LIST_SET_ERROR":
      return { ...state, error: action.payload };
    case "SET_VOLUME":
      return { ...state, volume: action.payload };
    case 'TOGGLE_LOOP':
      return {...state, isLoop: !state.isLoop};
    default:
      return state;
  }
};

export default rootReducer;