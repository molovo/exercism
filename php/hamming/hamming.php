<?php

function distance($a, $b) {
  // Start the count
  $count = 0;

  // Throw an error if two string lengths do not match
  if ( strlen($a) !== strlen($b) ) throw new InvalidArgumentException( 'DNA strands must be of equal length.' );

  $a = str_split($a);
  $b = str_split($b);

  // Loop through characters in string a.
  for ($i=0; $i < sizeof($a); $i++) {
    // If the character in the same position of
    // string b does not match, increment the count
    if ($a[$i] !== $b[$i]) {
      $count++;
    }
  }

  // Return the count
  return $count;
}
