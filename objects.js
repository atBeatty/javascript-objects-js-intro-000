var playlist = {
'artist': 'song'
}

function updatePlaylist(obj, artist, song) {
  //add the song and artist as key value
  //return whole playlist


  return Object.assign({}, obj, {[artist]: song});

  // return updatedPlaylist;
}
