export const setTrack = (track, author, trackfile) => ({
    type: 'SET_TRACK',
    payload: { track, author, trackfile },
  });
  
  export const resetTrack = () => ({
    type: 'RESET_TRACK',
  });