// write a range function that takes two arguments: start, and end, and returns an array of all the numbers from start
// up to and including end

function range(start, end) {
  var arr = [];
  if (start > end) {
    for (i = end; i <= start; i++) {
      arr.unshift(i);
    }
  }
  for (i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr;
}

console.log(range(2, 12));
console.log(range(12, 2));
console.log(range(50, 100));

// now, write a sum function that takes an array of numbers and returns the sum of those numbers

function sum(array) {
  let total = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  return total;
}

var array1 = [1, 2, 3, 4, 5];

document.write(sum(array1));

console.log(sum(range(1, 10)));

// write a function, reverseArray, that takes an array as an argument and returns a NEW array that has the same elements
// in inverse order

function reverseArray(arr) {
  let newArr = [];
  while ( (i = arr.shift()) !== undefined) {
    console.log(i);
    newArr.unshift(i);
  }
  return newArr;
}

var array2 = ["Hello", "Cruel", "World", "!"];

console.log(reverseArray(array2));
