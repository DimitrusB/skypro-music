const initialState = {
  tracks: [],
  currentTrackIndex: 0,
  isPlaying: false
}

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NEXT_TRACK':
      return {
        ...state,
        isPlaying: true,
        currentTrackIndex: state.currentTrackIndex + 1
      }
    case 'PREV_TRACK':
      return {
        ...state,
        isPlaying: true,
        currentTrackIndex: state.currentTrackIndex - 1
      }
    default:
      return state
  }
}
