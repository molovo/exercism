var Song = {
  main: "{n} bottles of beer on the wall, {n} bottles of beer.\nTake one down and pass it around, {n-1} bottles of beer on the wall.\n",
  penpenultimate: "{n} bottles of beer on the wall, {n} bottles of beer.\nTake one down and pass it around, {n-1} bottle of beer on the wall.\n",
  penultimate: "{n} bottle of beer on the wall, {n} bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n",
  last: "No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n",

  replaceVals: function ( n ) {
    var str = this.main;

    if ( n == 2 ) str = this.penpenultimate;
    if ( n == 1 ) str = this.penultimate;
    if ( n == 0 ) str = this.last;

    return str.replace( /{n}/g, n )
      .replace( /{n-1}/g, n - 1 );
  },

  verse: function ( n ) {
    return this.replaceVals( n );
  },

  sing: function ( from, to ) {
    var rtn = '';
    to = to || 0;

    for ( var i = from; i >= to; i-- ) {
      rtn += this.verse( i ) + ( i > to ? "\n" : "" );
    };

    return rtn;
  }
};

module.exports = Song;