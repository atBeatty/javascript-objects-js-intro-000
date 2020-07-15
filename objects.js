var playlist = {
'artist': 'song'
}

function updatePlaylist(obj, artist, song) {
  //add the song and artist as key value
  var newKeyPair = {};
  newKeyPair[artist] = song;
  //return whole playlist


  return Object.assign(obj, newKeyPair);

  // return updatedPlaylist;
}
