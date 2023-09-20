

export const getTrackList = (todos) => {
  return {
    type: 'GET_TRACK_LIST',
    payload: todos,
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