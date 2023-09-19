const initialState = {
  todos: [],
  error: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_TRACK_LIST":
      return { ...state, todos: action.payload };
    case "GET_TRACK_LIST_SET_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
