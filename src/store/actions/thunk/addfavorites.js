import { refreshToken } from "../../../components/api/api";
import { addFavoriteTracksSuccess} from "../trackActions";

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
          refreshToken(token.refresh)
            .then((response) => {
              return { ...token, ...response };
            })
            .then((result) => {
              setToken(result);
              addFavoritesTracks(track, result, setToken);
            });
        }

        if (!response.ok) throw new Error(response.statusText);
        return response.json();
      })
      .then(() => {
        dispatch(addFavoriteTracksSuccess(track));
      })
      .catch((error) => console.error("Error:", error));
  };
}
