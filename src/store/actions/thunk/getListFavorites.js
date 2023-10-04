import { refreshToken } from "../../../api";

export const getAllFavoriteTracks = (token, tokenRefresh) => {
    return function(dispatch) {
        return fetch("https://skypro-music-api.skyeng.tech/catalog/track/favorite/all/", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then(response => {
          if (response.status === 401) {
              return refreshToken(tokenRefresh)
              .then(newToken => getAllFavoriteTracks(newToken.access, tokenRefresh))
          }

          if (!response.ok) throw new Error(response.statusText);
          return response.json();
        })
        .then(
            json => dispatch({ type: "FETCH_FAVORITES_SUCCESS", payload: json }),
            error => dispatch({ type: "FETCH_FAVORITES_ERROR", error: error.toString() })
        );
    };
}