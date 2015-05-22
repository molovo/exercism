//
// This is only a SKELETON file for the 'Hello World' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var HelloWorld = function () {};

HelloWorld.prototype.capitalize = function ( input ) {
  return input.charAt( 0 ).toUpperCase() + input.slice( 1 );
}

HelloWorld.prototype.hello = function ( input ) {
  input = this.capitalize( input ) || 'world';

  return 'Hello, ' + input + '!';
};

module.exports = HelloWorld;