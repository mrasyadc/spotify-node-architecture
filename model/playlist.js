let playlist = [
  {
    id: 1,
    title: "LOSER",
    url: "https://open.spotify.com/track/2vzn8usBcuNL93DnTjEK0z?si=c11f95bf2cf0408b",
    artist: "BIGBANG",
    count_played: 1,
  },
];

export function getAllSongInPlaylist() {
  return playlist;
}

export function getAllSongInPlaylistSorted() {
  if (playlist.length === 1) return playlist;
  return playlist.sort((a, b) => {
    if (a.count_played > b.count_played) {
      return -1;
    }
  });
}

export function getSongInPlaylist(id) {
  return playlist.find((song) => song.id === Number.parseInt(id));
}

export function addSongToPlaylist(title, url, artist) {
  let newSong = {
    id: getNewIdFromSongs(),
    title: title,
    url: url,
    artist: artist,
    count_played: 0,
  };
  playlist.push(newSong);
  return newSong;
}

export function removeSongFromPlaylist(id) {
  const newSongsAfterRemovedSomeSong = playlist.filter(
    (song) => song.id !== id
  );
  playlist = newSongsAfterRemovedSomeSong;
  return playlist;
}

export function playSongFromPlaylist(id) {
  let songs = getSongInPlaylist(id);
  songs.count_played += 1;
  return songs.url;
}

function getNewIdFromSongs() {
  if (playlist.length === 0) return 0;
  let lastIndex = playlist[playlist.length - 1].id;
  let newIndex = lastIndex + 1;
  return newIndex;
}
