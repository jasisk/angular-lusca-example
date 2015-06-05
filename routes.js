var path = require('path');


module.exports = function (router) {


  router.get('/angular.js', function (req, res) {
    var angularPath = path.dirname(require.resolve('angular'));
    angularPath = path.join(angularPath, 'angular.js');

    res.sendFile(angularPath);
  });

  router.get('/', function (req, res) {
    res.sendFile('/', {root: '.'});
  });

  router.post('/make-animal', function (req, res) {
    res.send({message: 'animal added to a real database!'});
  });
};
