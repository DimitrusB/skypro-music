import { refreshToken } from "../../../api";
import { fetchFavoritesSuccess } from "../trackActions";

export const getAllFavoriteTracks = (token, tokenRefresh) => {
    return (dispatch) => {
      return makeRequestWithTokenRefresh('https://skypro-music-api.skyeng.tech/catalog/track/favorite/all/', token, tokenRefresh, dispatch);
    };
  }
  
  const makeRequestWithTokenRefresh = (url, token, tokenRefresh, dispatch, retryCount = 0) => {
    return fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => {
        if(response.status === 401 && retryCount === 0) {
          // Trying to refresh the token
          return refreshToken(tokenRefresh)
              .then((newToken) => 
                makeRequestWithTokenRefresh(
                  url,
                  newToken.access,
                  newToken.refresh || tokenRefresh,
                  dispatch,
                  retryCount + 1
                )
              );
        }
        if (!response.ok) throw new Error(response.statusText);
        return response.json();
      }) 
      .then(json => dispatch(fetchFavoritesSuccess(json)))
      .catch(error => {
        console.error('Error in fetch or in processing the returned data:', error.message); 
        console.error('Error stack:', error.stack);
        dispatch({ type: "FETCH_FAVORITES_ERROR", error: error.toString() });
      })
  }