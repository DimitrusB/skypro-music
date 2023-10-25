import { refreshToken } from "../../../components/api/api";
import { removeFromFavoriteTracksSuccess, fetchFavoritesError } from "../trackActions";
import clientStorage from "../../../utils/client-storage";

export function delFavoritesTracks(trackId, token, setToken) {
  return (dispatch) => {
    return fetch(
      `https://skypro-music-api.skyeng.tech/catalog/track/${trackId}/favorite/`,
      {
        method: "DELETE",
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
              return delFavoritesTracks(trackId, newToken, setToken);
            });
        }
        if (!response.ok) throw new Error(response.statusText);
        return response.json();
      })
      .then(() => {
        dispatch(removeFromFavoriteTracksSuccess(trackId));
      })
      .catch((error) => {
        console.error("Error during deletion:", error);
        dispatch(fetchFavoritesError(error.toString())); 
      });
  };
}
