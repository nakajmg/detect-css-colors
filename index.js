module.exports = function (str) {
  var cssColors = require('css-color-list')().join('|');
  var rgbRegex = require('./regex/rgb');
  var rgbaRegex = require('./regex/rgba');
  var hexRegex = require('./regex/hex');
  var hslRegex = require('./regex/hsl');
  var hslaRegex = require('./regex/hsla');
  
  var regex = new RegExp('[\\s:,]+(' +
    rgbRegex.source + '|' +
    rgbaRegex.source + '|' +
    hexRegex.source + '|' +
    hslRegex.source + '|' +
    hslaRegex.source + '|' +
    cssColors + '|transparent' + ')+[\\s;,\\)]+'
    , 'ig');
  
  var matched = str.match(regex);
  return matched ? matched.map(function(match) {
    return match.replace(regex, '$1');
  }) : matched;
};
