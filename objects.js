var playlist = {
'artist': 'song'
}

function updatePlaylist(obj, artist, song) {
  //add the song and artist as key value
  //return whole playlist
  var updatedPlaylist = {
    artist: song
  }

  Object.assign(obj, updatedPlaylist);
  
  return updatedPlaylist;
}
