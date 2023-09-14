const allTracks = "https://skypro-music-api.skyeng.tech/catalog/track/all/"

export async function getAllTracks() {
    const response = await fetch(allTracks);
    const data = await response.json();
    return data;
  }
