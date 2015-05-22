var Bob = function () {

  tests = [ {
    rule: function ( input ) {
      // Returns true if input exists
      return input;
    },
    message: 'Whatever.'
  }, {
    rule: function ( input ) {
      // Returns true if input is a statement containing a question mark
      return ( input.length > input.indexOf( '?' ) > -1 );
    },
    message: 'Whatever.'
  }, {
    rule: function ( input ) {
      // Returns true if input is a question
      return input.charAt( input.length - 1 ) === '?';
    },
    message: 'Sure.'
  }, {
    rule: function ( input ) {
      // Returns true if input is forceful
      return input.charAt( input.length - 1 ) === '!';
    },
    message: 'Whatever.'
  }, {
    rule: function ( input ) {
      // Returns true if input contains one or more acronyms
      return input.match( /([A-Z][A-Z]+)/g );
    },
    message: 'Whatever.'
  }, {
    rule: function ( input ) {
      // Returns true if input is shouting
      return input === input.toUpperCase();
    },
    message: 'Whoa, chill out!'
  }, {
    rule: function ( input ) {
      // Returns true if input is shouting without an exclamation mark
      return input === input.toUpperCase() && input.charAt( input.length - 1 ) !== '!';
    },
    message: 'Whoa, chill out!'
  }, {
    rule: function ( input ) {
      // Returns true if input is shouting a question
      return input === input.toUpperCase() && input.charAt( input.length - 1 ) === '?';
    },
    message: 'Whoa, chill out!'
  }, {
    rule: function ( input ) {
      // Returns true if input contains more than one sentence
      return ( ( input.length - input.replace( /([\!\.\?])/g, '' ).length ) > 2 );
    },
    message: 'Sure.'
  }, {
    rule: function ( input ) {
      // Returns true if input is only numbers
      return !input.match( /([a-zA-Z])/g );
    },
    message: 'Whatever.'
  }, {
    rule: function ( input ) {
      // Returns true if input is shouting numbers
      return input === input.toUpperCase() && input.match( /([0-9])/g ) && input.charAt( input.length - 1 ) === '!';
    },
    message: 'Whoa, chill out!'
  }, {
    rule: function ( input ) {
      // Returns true if input is a question with only numbers
      return !input.match( /([a-zA-Z])/g ) && input.charAt( input.length - 1 ) === '?';
    },
    message: 'Sure.'
  }, {
    rule: function ( input ) {
      // Returns true if input is shouting with special characters
      return input === input.toUpperCase() && input.match( /([\%\*\@\#\$\(\)\^]+)/g );
    },
    message: 'Whoa, chill out!'
  }, {
    rule: function ( input ) {
      // Returns true if input is only whitespace
      return input.match( /([\s]+)/g ) && !input.match( /([\S])/g );
    },
    message: 'Fine. Be that way!'
  }, {
    rule: function ( input ) {
      // Returns true if input contains umlauts
      return input.match( new RegExp( "([\xfc\xe4\xdc])", "g" ) );
    },
    message: 'Whatever.'
  }, {
    rule: function ( input ) {
      // Returns true if input is shouting umlauts
      return input === input.toUpperCase() && input.match( new RegExp( "([\xdc\xc4\xdc])", "g" ) );
    },
    message: 'Whoa, chill out!'
  }, {
    rule: function ( input ) {
      // Returns true if input is missing
      return !input;
    },
    message: 'Fine. Be that way!'
  } ];

  return {

    hey: function ( input ) {
      for ( var i = tests.length - 1; i >= 0; i-- ) {
        // Loop through tests and return the message
        // for the first one which matches
        if ( tests[ i ].rule( input ) ) return tests[ i ].message;
      }
    }

  };

};

module.exports = Bob;