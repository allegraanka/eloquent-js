// '#' triangle
var string = '';
for (i = 0; i <= 7; i++) {
  string += '#';
  console.log(string);
}

// fizzbuzz
for (i = 0; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log('FizzBuzz');
  } else if (i % 3 == 0) {
    console.log('Fizz');
  } else if (i % 5 == 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}

//create an 8x8 chessboard using '#' characters and spaces. then, make it so that the board can be any given WxH
function chessBoard(w, h) {
  var string1 = '#' + ' ' + '#' + ' ' + '#' + ' ' + '#' + ' ' + '\n'
  var string2 = ' ' + '#' + ' ' + '#' + ' ' + '#' + ' ' + '#' + '\n';
  var size = w * h;
  for (i = 0; i <= size; i++) {
    if (i % 2 == 0) {
      console.log(string1);
    } else {
      console.log(string2);
    }
  }
}

chessBoard(2, 3);
