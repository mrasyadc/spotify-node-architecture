import {
  addSongToPlaylist,
  getAllSongInPlaylist,
  getSongInPlaylist,
  removeSongFromPlaylist,
} from "../model/playlist.js";

export function addMusic(title, url, artist) {
  return addSongToPlaylist(title, url, artist);
}

export function checkPlaylist() {
  let allSongs = getAllSongInPlaylist();
  return allSongs;
}

export function playSong(id) {
  return getSongInPlaylist(id).url;
}

export function deleteSong(id) {
  let songsToBeRemoved = getSongInPlaylist(id);
  removeSongFromPlaylist(id);
  return songsToBeRemoved;
}