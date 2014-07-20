var lorem = require('lorem-ipsum');
var seedrandom = require('seedrandom');


module.exports = Lorem;

function Lorem(){}

Lorem.prototype.view = __dirname;
Lorem.prototype.name = 'd-lorem';

Lorem.prototype.init = function(){
  var rnd = seedrandom(this.model.get('id') || this.id);

  var html = this.model.get('plain');
  var val = this.model.get('val');

  this.model.set('lorem', getLorem(val, html, rnd));
}


function getLorem(val, format, rnd){

  val = String(val);
  var options = {};
  var units = 'sentences';

  format = format ? 'plain' : 'html';

  switch (val[0]) {
    case 'w':
      val = val.slice(1);
      units = 'words';
      break;
    case 's':
      val = val.slice(1);
      units = 'sentences';
      break;
    case 'p':
      val = val.slice(1);
      units = 'paragraphs';
      break;
  }

  return lorem({
    count: val
    , units: units
    , sentenceLowerBound: options.sentenceLowerBound || 5
    , sentenceUpperBound: options.sentenceUpperBound || 15
    , paragraphLowerBound: options.paragraphLowerBound || 3
    , paragraphUpperBound: options.paragraphUpperBound || 7
    , words: options.words
    , format: format
    , random: rnd
  });

}
