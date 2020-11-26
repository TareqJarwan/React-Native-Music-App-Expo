/**
 * PS: I had to write this uneficnet services since the api its not well
 * documented and not designed well
 */

import axios from '../config/axios';

const baseURL = 'https://api.happi.dev/v1/music';

export const fetchArtists = async (pageNumber) => {
  try {
    const data = await axios.get(`${baseURL}/artists?page=${pageNumber}`);
    return data.data.result;
  } catch (error) {
    console.log(error);
  }
};

export const fetchAllSongs = async (albumsUrl) => {
  try {
    let result = [];
    const data = await axios.get(albumsUrl);
    const albums = data.data.result.albums;

    for (let i = 0; i < albums.length; i++) {
      const tracks = await fetchAllSongsFromAlbum(albums[i].api_tracks);
      result.push({album: albums[i].album, tracks: tracks});
    }

    return result;
  } catch (error) {
    console.log(error);
  }
};

export const fetchAllSongsFromAlbum = async (api_tracks) => {
  try {
    const data = await axios.get(api_tracks);
    const tracks = data.data.result.tracks;
    return tracks;
  } catch (error) {
    console.log(error);
  }
};

export const fetchSearchResult = async (word) => {
  try {
    //console.log(word);
    const data = await axios.get(`${baseURL}?q=${word}&limit=100`);
    //console.log('Search...', JSON.stringify(data.data.result));
    return data.data.result;
  } catch (error) {
    console.log(error);
  }
};
