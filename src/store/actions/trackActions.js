

export const getTrackList = (track) => {
  return {
    type: 'GET_TRACK_LIST',
    payload: track,
  };
};

export const getTrackListError = (error) => {
  return {
    type: 'GET_TRACK_LIST_SET_ERROR',
    payload: error,
  };
};

export const setVolume = (value) => ({
  type: 'SET_VOLUME',
  payload: value,
});

export const toggleLoop = () => ({
  type: 'TOGGLE_LOOP'
});

export const setPlaying = (isPlaying) => ({
  type: 'SET_PLAYING',
  payload: isPlaying,
});

export const setNextTrack = () => ({
  type: "SET_NEXT_TRACK"
});

export const setPreviousTrack = () => ({
  type: "SET_PREVIOUS_TRACK"
});

export const setCurrentTrack = (trackIndex) => {
  return {
    type: "SET_CURRENT_TRACK",
    payload: trackIndex
  };
};