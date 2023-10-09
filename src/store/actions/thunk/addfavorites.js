import { refreshToken } from "../../../api";
import { addFavoriteTracksSuccess } from "../trackActions";

export function addFavoritesTracks(trackId, token) {
    return (dispatch) => {
      return fetch(`https://skypro-music-api.skyeng.tech/catalog/track/${trackId}/favorite/`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (!response.ok) throw new Error(response.statusText);
        return response.json();
      })
      .then((json) => {
        dispatch(addFavoriteTracksSuccess({...json, id: trackId}));
      })
      .catch(error => console.error('Error:', error));
    }
  }  
  