module.exports = function(app, bandcamp) {
  app.get('/', function(req, res) {
    var letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var length = getRandomInt(3, 7);

    var query = ""
    for (var i = 0; i < length; i++){
      query += letters.charAt(getRandomInt(0, letters.length));
    }

    var params = {
      query: query,
      page: 1
    };

    var album = ""

    bandcamp.search(params, function(error, searchResults) {
      if (error) {
      } else {
        for (var i = 0; i < searchResults.length; i++){
          if (album == "" && searchResults[i].type == "album") {
            album = searchResults[i].url;
            res.redirect(album);
          }
        }
      }
    });
  });
}

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}