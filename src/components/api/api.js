const allTracks = "https://skypro-music-api.skyeng.tech/catalog/track/all/"

export async function getAllTracks() {
    const response = await fetch(allTracks);
    const data = await response.json();
    return data;
  }
  
  export async function getAllTracksById(Id) {
    const response = await fetch(`https://skypro-music-api.skyeng.tech/catalog/selection/${Id}/`);
    const data = await response.json();
    return data;
  }

  export function signIn(email, password) {
    return fetch("https://skypro-music-api.skyeng.tech/user/login/", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        "content-type": "application/json",
      },
    });
  }

  export function signUp(email, password) {
    return fetch("https://skypro-music-api.skyeng.tech/user/signup/", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
        username: email,
      }),
      headers: {
        "content-type": "application/json",
      },
    });
  }


export function getToken(email, password) {
  return fetch("https://skypro-music-api.skyeng.tech/user/token/", {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: {
      "content-type": "application/json",
    },
  })
  .then((response) => {
    if (!response.ok && response.status === 401) {
      return response.json().then((json) => {
          return refreshToken(json.refresh);
        });
    } else if (!response.ok) {
      throw new Error('Error: ' + response.statusText);
    } else {
      return response.json();
    }
  });
}

export function refreshToken(refreshToken) {
  return fetch("https://skypro-music-api.skyeng.tech/user/token/refresh/", {
    method: "POST",
    body: JSON.stringify({
      refresh: refreshToken,
    }),
    headers: {
      "content-type": "application/json",
    },
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Error: ' + response.statusText);
    } else {
      return response.json();
    }
  })
}

