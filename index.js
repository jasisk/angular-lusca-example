var kraken = require('kraken-js');
var express = require('express');
var app = express();

app.use(kraken());

app.on('start', function () {
  app.listen(8000).on('listening', function () {
    var address = this.address().port || this.address();
    console.log('listening on %s ...', address);
  });
});

