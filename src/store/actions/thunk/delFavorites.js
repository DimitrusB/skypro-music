import { removeFromFavoriteTracksSuccess } from "../trackActions";

export function delFavoritesTracks(trackId, token) {
    return (dispatch) => {
      return fetch(`https://skypro-music-api.skyeng.tech/catalog/track/${trackId}/favorite/`, {
         method: "DELETE",
         headers: {
           Authorization: `Bearer ${token}`,
         },
      })
      .then((response) => {
        if (!response.ok) throw new Error(response.statusText);
        return response.json();
      })
      .then((json) => {
        console.log(json);
        dispatch(removeFromFavoriteTracksSuccess(json));
      })
      .catch(error => console.error('Error:', error));
    }
  }