const initialState = {
  track: [],
  volume: 0.5,
  isLoop: false,
  isPlaying: false,
  currentTrackId: 0,
  isShuffle: false,
  favoritetracks: [],
  isLike: {},
  error: null,
  playFavorite: false,
};

const rootReducer = (state = initialState, action) => {
  const tracksId = state.track.map((t) => t.id);
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
      return { ...state, track: action.payload, playFavorite: false };

    case "FETCH_FAVORITES_SUCCESS":
      const favoritesTracks = {};
      action.payload.forEach((track) => (favoritesTracks[track.id] = true));
      return {
        ...state,
        favoritetracks: action.payload,
        isLike: favoritesTracks,
        error: null,
      };

    case "FETCH_FAVORITES_ERROR":
      // При ошибке обновляем состояние ошибкой
      return {
        ...state,
        error: action.error,
      };

    case "ADD_TO_FAVORITES":
      return {
        ...state,
        favoritetracks: [...state.favoritetracks, action.payload],
        isLike: { ...state.isLike, [action.payload.id]: true }, // устанавливает значение "лайка" для этого id в true
      };

    case "DEL_FAVORITE_TRACKS_SUCCESS":
      return {
        ...state,
        favoritetracks: state.favoritetracks.filter(
          (track) => track.id !== action.payload
        ),
        isLike: { ...state.isLike, [action.payload]: false }, // устанавливает значение "лайка" для этого id в false
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
        currentTrackId: action.payload,
      };

    case "SET_PLAYING":
      return { ...state, isPlaying: action.payload };

    case "SET_PLAYING_FAVORITE":
      return { ...state, track: state.favoritetracks, playFavorite: true, };

    case "SET_NEXT_TRACK":
      const { isShuffle, track } = state;
      let nextTrackId;
      if (isShuffle) {
        do {
          nextTrackId = tracksId[Math.floor(Math.random() * track.length)];
        } while (nextTrackId === state.currentTrackId);
      } else {
        const currentIndex = tracksId.findIndex(
          (id) => id === state.currentTrackId
        );
        nextTrackId =
          currentIndex === tracksId.length - 1 ? tracksId[0] : tracksId[currentIndex + 1];
      }
      return {
        ...state,
        currentTrackId: nextTrackId,
      };

    case "SET_PREVIOUS_TRACK":
      const { isShuffle: isShufflePrev, track: trackPrev } = state;
      let prevTrackId;
      if (isShufflePrev) {
        do {
          prevTrackId = tracksId[Math.floor(Math.random() * track.length)];
        } while (prevTrackId === state.currentTrackId);
      } else {
        const currentIndex = tracksId.findIndex(
          (id) => id === state.currentTrackId
        );
        prevTrackId =
          currentIndex > 0 ? tracksId[currentIndex - 1] : tracksId.slice(-1)[0];
      }
      return {
        ...state,
        currentTrackId: prevTrackId,
      };
    default:
      return state;
  }
};

export default rootReducer;
