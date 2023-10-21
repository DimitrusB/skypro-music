import { refreshToken } from "../../../components/api/api";
import { addFavoriteTracksSuccess, fetchFavoritesError } from "../trackActions";
import clientStorage from "../../../utils/client-storage";

export function addFavoritesTracks(track, token, setToken) {
  return (dispatch) => {
    return fetch(
      `https://skypro-music-api.skyeng.tech/catalog/track/${track.id}/favorite/`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token.access}`,
        },
      }
    )
    .then((response) => {
      if (response.status === 401) {
        return refreshToken(token.refresh)
          .then((newTokenResponse) => {
            const newToken = {
              access: newTokenResponse.access,
              refresh: newTokenResponse.refresh || token.refresh,
            };
            setToken(newToken);
            clientStorage.setTokenUser(newToken);
            return addFavoriteTracksSuccess(track, newToken, setToken);
          });
      }
        if (!response.ok) throw new Error(response.statusText);
        return response.json();
      })
      .then(() => {
        dispatch(addFavoriteTracksSuccess(track));
      })
      .catch((error) => {
        console.error("Error:", error);
        dispatch(fetchFavoritesError(error.toString())); 
      });
  };
}
