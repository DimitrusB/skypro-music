const initialState = {
  track: [],
  volume: 0.5,
  isLoop: false,
  isPlaying: false,
  currentTrackIndex: 0,
  isShuffle: false,
  favoritetracks: [],
  isLike: null,
  error: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {


    case "SHUFFLE_TRACKS":
      const shuffledTracks = [...state.track];
      for (let i = shuffledTracks.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledTracks[i], shuffledTracks[j]] = [
          shuffledTracks[j],
          shuffledTracks[i],
        ];
      }
      return {
        ...state,
        isShuffle: !state.isShuffle,
      };


    case "GET_TRACK_LIST":
      return { ...state, track: action.payload };
    // case "GET_TRACK_LIST_FAVORITES":
    //   return { ...state, favoritetracks: action.payload };


    case "FETCH_FAVORITES_SUCCESS":
      // Обновить список любимых треков ответом от сервера
      return {
        ...state,
        favoritetracks: action.payload,
        error: null,
      };


    case "FETCH_FAVORITES_ERROR":
      // При ошибке обновляем состояние ошибкой
      return {
        ...state,
        error: action.error,
      };
    //       case "ADD_TO_FAVORITES":
    // return {
    //   ...state,
    //   favoritetracks: [...state.favoritetracks, action.payload],
    //   isLike:true,
    // };


    case "ADD_TO_FAVORITES":
      return {
        ...state,
        favoritetracks: [...state.favoritetracks, action.payload],
      };


    case "REMOVE_FROM_FAVORITES":
      return {
        ...state,
        favoritetracks: state.favoritetracks.filter(
          (track) => track.id !== action.payload.id
        ),
        isLike: false,
      };


    case "GET_TRACK_LIST_SET_ERROR":
      return { ...state, error: action.payload };


    case "SET_VOLUME":
      return { ...state, volume: action.payload };


    case "TOGGLE_LOOP":
      return { ...state, isLoop: !state.isLoop };


    case "SET_CURRENT_TRACK":
      return {
        ...state,
        currentTrackIndex: action.payload,
        isPlaying: true,
      };


    case "SET_PLAYING":
      return { ...state, isPlaying: action.payload };


    case "SET_NEXT_TRACK":
      const { isShuffle, track } = state;
      let nextTrackIndex;
      if (isShuffle) {
        do {
          nextTrackIndex = Math.floor(Math.random() * track.length);
        } while (nextTrackIndex === state.currentTrackIndex);
      } else {
        nextTrackIndex = (state.currentTrackIndex + 1) % track.length;
      }
      return {
        ...state,
        currentTrackIndex: nextTrackIndex,
      };

      
    case "SET_PREVIOUS_TRACK":
      const { isShuffle: isShufflePrev, track: trackPrev } = state;
      let prevTrackIndex;
      if (isShufflePrev) {
        do {
          prevTrackIndex = Math.floor(Math.random() * trackPrev.length);
        } while (prevTrackIndex === state.currentTrackIndex);
      } else {
        prevTrackIndex =
          state.currentTrackIndex > 0
            ? state.currentTrackIndex - 1
            : trackPrev.length - 1;
      }
      return {
        ...state,
        currentTrackIndex: prevTrackIndex,
      };
    default:
      return state;
  }
};

export default rootReducer;
