var Words = {

  count: function ( input ) {
    var words = input.split( /\s+/ ),
      items = {};

    for ( var i = 0; i < words.length; i++ ) {
      if ( !items.hasOwnProperty( words[ i ] ) ) items[ words[ i ] ] = 0;
      items[ words[ i ] ] += 1;
    }

    return items;
  }

};

module.exports = Words.count;