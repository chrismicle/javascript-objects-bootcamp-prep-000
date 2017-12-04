var playlist = {"Judy Garland": "Somewhere Over the Rainbow"};

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist;
}

/*
options
1. `node` from learn terminal
2. browser's javascript consoles
3. https://repl.it/
*/
