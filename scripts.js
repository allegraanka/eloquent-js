// create a function like Math.min by hand

function min(a, b) {
  if (a < b) {
    console.log(a);
  } else if (b < a) {
    console.log(b);
  } else {
    console.log("Not applicable.");
  }
}

min(2, 3);
min(5, 5);
min(110, 50);


// use recursion to write a function isEven() which takes a number as an argument and returns a boolean

function isEven(n) {
  if (n < 0) {
    n *= -1;
  }

  if (n == 1) {
    return false;
  } else if (n == 0) {
    return true;
  } else {
    return isEven(n - 2);
  }
}

document.write(isEven(3));
document.write(isEven(44));
document.write(isEven(3));
document.write(isEven(-3));
document.write(isEven(-56));


// write a function that takes a string as an argument and returns a number indicating the number of B's in the string

function createBs(str) {
var count = 0;
var bFinder = str.indexOf('B');
  while (bFinder !== -1) {
    count++;
    bFinder = str.indexOf('B', bFinder + 1);
  }
  return count;
}

console.log(createBs("Butthead")); // 1
console.log(createBs("Bumblebee")); // 1
console.log(createBs("BBBBBammmbB")); // 6
console.log(createBs("Hello there")); // 0
