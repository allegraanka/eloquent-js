
// now, reverse an array in place.

array = ["Hey", "what's", "up", "y'all", "?"];
arrayTwo = [1, 2, 3, 4, 5];
arrayThree = ["?", "out", "hang", "Wanna"];

function reverseInPlace(arr) {
  var length = arr.length,
      middle = arr.length / 2,
      placeholder = null;

  for (i = 0; i < middle; i += 1) {
    placeholder = arr[i];
    arr[i] = arr[length - 1 - i];
    arr[length - 1 - i] = placeholder;
  }
  return arr.join(' ');
}

document.write(reverseInPlace(array));
document.write(reverseInPlace(arrayTwo));
document.write(reverseInPlace(arrayThree));
