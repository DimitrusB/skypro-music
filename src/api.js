const allTracks = "https://skypro-music-api.skyeng.tech/catalog/track/all/"

export async function getAllTracks() {
    const response = await fetch(allTracks);
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
  }
  