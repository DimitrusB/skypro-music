const deepFreeze = (obj) => {
  const propNames = Object.getOwnPropertyNames(obj);

  for (let name of propNames) {
    let value = obj[name];

    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }

  return Object.freeze(obj);
};

export const getTrackList = (track) => {
  return deepFreeze({
    type: 'GET_TRACK_LIST',
    payload: track,
  });
};

export const getTrackListError = (error) => {
  return deepFreeze({
    type: 'GET_TRACK_LIST_SET_ERROR',
    payload: error,
  });
};

export const setVolume = (value) => {
  return deepFreeze({
  type: 'SET_VOLUME',
  payload: value,
});
};
export const toggleLoop = () => ({
  type: 'TOGGLE_LOOP'
});

export const setPlaying = (isPlaying) => {
  return deepFreeze({
  type: 'SET_PLAYING',
  payload: isPlaying,
});
};
export const setNextTrack = () => {
  return deepFreeze({
  type: "SET_NEXT_TRACK"
});
};

export const setPreviousTrack = () => {
  return deepFreeze({
  type: "SET_PREVIOUS_TRACK"
});
};

export const setCurrentTrack = (trackIndex) => {
  return deepFreeze({
    type: "SET_CURRENT_TRACK",
    payload: trackIndex
  });
};

export const shuffleTracks = () => {
  return deepFreeze({
  type: 'SHUFFLE_TRACKS',
});
};

export const addFavoriteTracksSuccess = (favoritetracks) => {
  return deepFreeze({
  type: "ADD_TO_FAVORITES",
  payload: favoritetracks,
});
};

export const removeFromFavoriteTracksSuccess = (favoritetracks) => {
  return deepFreeze({
  type: "DEL_FAVORITE_TRACKS_SUCCESS",
  payload: favoritetracks,
  });
};

// export const removeFromFavorites = (favoritetracks) => {
//   return deepFreeze({
//   type: "REMOVE_FROM_FAVORITES",
//   payload: favoritetracks,
// });
// };
export const fetchFavoritesSuccess = (favoritetracks) => {
  return deepFreeze({
  type: 'FETCH_FAVORITES_SUCCESS',
  payload: favoritetracks,
});
}

export const fetchFavoritesError = (error) => {
  return deepFreeze({
  type: 'FETCH_FAVORITES_ERROR',
  error
});
}

export const ADD_FAVORITE_TRACKS = "ADD_FAVORITE_TRACKS";

// export const addFavoriteTracksSuccess = (json) => ({
//     dispatch({ 
//       type: 'ADD_FAVORITE_TRACK_SUCCESS', 
//       payload: track 
//     });
//   }

export const shouldPlayFromFavorite = (isPlaying) => {
  return deepFreeze({
  type: 'SET_PLAYING_FAVORITE',
  payload: isPlaying,
});
};