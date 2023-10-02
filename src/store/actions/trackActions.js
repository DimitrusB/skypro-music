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

export const getTrackListFavorites = (favoritetracks) => {
  return deepFreeze({
    type: 'GET_TRACKS_LIST_FAVORITES',
    payload: favoritetracks,
  });
};

export const addToFavorites = (favoritetracks) => {
  return deepFreeze({
  type: "ADD_TO_FAVORITES",
  payload: favoritetracks,
});
};

export const removeFromFavorites = (favoritetracks) => {
  return deepFreeze({
  type: "REMOVE_FROM_FAVORITES",
  payload: favoritetracks,
});
};