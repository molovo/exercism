/* global module */
'use strict';

var Anagram = function ( input ) {
  function getInputArray( input ) {
    if ( typeof input === 'undefined' ) return 'Fuck it';
    var ary = [];

    for ( var i = input.length - 1; i >= 0; i-- ) {
      ary.push( input.charAt( i ).toLowerCase() );
    }

    ary.sort( function ( a, b ) {
      if ( a === b ) return 0;

      return ( a < b ? -1 : 1 );
    } );

    return ary;
  }

  var inputArray = getInputArray( input );

  return {

    matches: function ( matches ) {
      if ( typeof matches === 'string' ) {
        matches = arguments;
      }

      var outputArray = [],
        testArray;

      for ( var i = 0; i <= matches.length - 1; i++ ) {
        testArray = [];

        if ( matches[ i ].toLowerCase() !== input.toLowerCase() ) {
          for ( var j = matches[ i ].length - 1; j >= 0; j-- ) {
            testArray.push( matches[ i ].charAt( j ).toLowerCase() );
          }

          /* jshint loopfunc: true */
          testArray.sort( function ( a, b ) {
            if ( a === b ) return 0;

            return ( a < b ? -1 : 1 );
          } );

          if ( testArray.join() == inputArray.join() ) {
            outputArray.push( matches[ i ] );
          }
        }
      }

      return outputArray;
    }
  };
};

module.exports = Anagram;