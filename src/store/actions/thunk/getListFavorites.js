export const getAllFavoriteTracks = (token) => {
    return function(dispatch) {
        return fetch("https://skypro-music-api.skyeng.tech/catalog/track/favorite/all/", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then(response => {
          if (!response.ok) throw new Error(response.statusText);
          return response.json();
        })
        .then(
            json => dispatch({ type: "FETCH_FAVORITES_SUCCESS", payload: json }),
            error => dispatch({ type: "FETCH_FAVORITES_ERROR", error: error.toString() })  // Updated here
        );
    };
}