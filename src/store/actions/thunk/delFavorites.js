import { refreshToken } from "../../../components/api/api";
import { removeFromFavoriteTracksSuccess } from "../trackActions";

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
          refreshToken(token.refresh)
            .then((response) => {
              return { ...token, ...response };
            })
            .then((result) => {
              setToken(result);
              delFavoritesTracks(trackId, result, setToken);
            });
        }

        if (!response.ok) throw new Error(response.statusText);
        return response.json();
      })
      .then(() => {
        dispatch(removeFromFavoriteTracksSuccess(trackId));
      })
      .catch((error) => console.error("Error:", error));
  };
}
