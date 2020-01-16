let playList = ["Look back at it", "The Box", "Life is Good"]




playList.forEach(function(song) {
  $('#songs').append("<li>" + song + "</li>");
});

let artistList = ["A boogie with da hoodie", "Roddy Rich", "drake"]

artistList.forEach(function(artist) {
  $("#artists").append("<li>" + artist + "</li>");
});


let songlength = ["3:00","3:17","5:36"]
  $("#songlength").append("<li>" + songlength + "</li>");
});