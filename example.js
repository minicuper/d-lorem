var Lorem = require('./index');

module.exports = function(app){
  app.component(Lorem);
  app.component(LoremExample);
}

function LoremExample(){}

LoremExample.prototype.view = __dirname + '/example';
LoremExample.prototype.name = 'd-lorem-example';