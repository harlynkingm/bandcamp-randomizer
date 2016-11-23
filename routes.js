module.exports = function(app, bandcamp, request) {
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
  
  app.get('/soundcloud', function(req, res){
    getSoundcloudURL(res);
  });
  
  function getSoundcloudURL(res){
    var guess = getRandomInt(100000000, 295000000);
    
    request("http://api.soundcloud.com/tracks/" + guess + sc_key, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        res.redirect(JSON.parse(body).permalink_url);
    } else if (error) {
      console.log(error);
    } else {
      console.log(response.statusCode);
      getSoundcloudURL(res);
    }
});
  }
}

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var sc_key = "?client_id=73de154679452e296b7781a98ca928c0"