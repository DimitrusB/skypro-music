const allTracks = "https://painassassin.online/catalog/track/all"

export async function getAllTracks() {
    const response = await fetch(allTracks);
    const data = await response.json();
    return data;
  }
