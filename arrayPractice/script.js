// given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20],
// make a function that organizes these into individual array
// that is ordered. For example answer(ArrayFromAbove) should
//  return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591].


let array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

// sort function
const sortCodition = (a, b) => {
  return a - b;
}

// Wraping the value as an InnerArray, if the value repeat continuous wrap
// if not push InnerArray to the outerArray
const bundleSame = (array) => {
  let numNow = array[0];
  let outerArray = [];
  let innerArray = [];

  for (var i = 0; i < array.length; i++){
    if ( numNow === array[i] ) {
      innerArray.push(array[i]);
    } else {
      (innerArray.length === 1)
      ? outerArray.push(array[i])
      : outerArray.push(innerArray);

      // Initial innerArray
      numNow = array[i];
      innerArray = [];
      innerArray.push(array[i]);
    }
  }
  return outerArray;
}

console.log(bundleSame(array.sort(sortCodition)));
console.log(array);
