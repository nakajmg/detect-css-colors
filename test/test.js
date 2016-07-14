var assert = require('assert');
var detectCssColors = require('..');

var testString = '[class="blue"] { $red: #F21; } .btn--yellow { color: $red; background-color: green; color: rgba(0,0,0,1); color: rgb( 1 , 0, 0 ); color: hsl(120 , 50% , 50% ); color: hsla(120, 50% , 50% ,.3  ); background: linear-gradient(to bottom right, rgba(255, 0, 0 , 0.1)); background: linear-gradient(to bottom right, rgb(100,0,0)); text-shadow: 0 0 #000, 0 0 #fff; border-color: transparent; }';

describe('detect-css-colors', function() {
  it('detect css colors', function() {
    assert.deepEqual(
      detectCssColors(testString),
      [ '#F21', 'green', 'rgba(0,0,0,1)', 'rgb( 1 , 0, 0 )', 'hsl(120 , 50% , 50% )', 'hsla(120, 50% , 50% ,.3  )', 'rgba(255, 0, 0 , 0.1)', 'rgb(100,0,0)', '#000', '#fff', 'transparent']
    );
  });
});
