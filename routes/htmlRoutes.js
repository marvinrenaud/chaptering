// DEPENDENCIES
var path = require('path');


// ROUTING
module.exports = function(app) {

  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../index.html'));
  });

  app.get('/content_selector', function(req, res) {
    res.sendFile(path.join(__dirname, '../content_selector.html'));
  });

  app.get('/video_player', function(req, res) {
    res.sendFile(path.join(__dirname, '../video_player.html'));
  });

  // If no matching route is found default to home
  app.use(function(req, res) {
    res.sendFile(path.join(__dirname, '../index.html'));
  });
};
