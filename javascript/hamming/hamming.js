var Hamming = {

  compute: function ( a, b ) {
  	// Start the count
    var count = 0;

    // Throw an error if two string lengths do not match
    if ( a.length !== b.length ) throw new Error( 'DNA strands must be of equal length.' );

    // Loop through characters in string a.
    for ( var i = a.length - 1; i >= 0; i-- ) {
    	// If the character in the same position of
    	// string b does not match, increment the count
      if ( a.charAt( i ) !== b.charAt( i ) ) count++;
    };

    // Return the count
    return count;
  }

};

module.exports = Hamming;