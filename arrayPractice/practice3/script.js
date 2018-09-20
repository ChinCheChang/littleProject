// Write a javascript function that takes an array of
// numbers and a target number. The function should
//  find two different numbers in the array that, when
//  added together, give the target number. For example:
//  answer([1,2,3], 4)should return [1,3]

const testArray = [1,2,3];



const answer = (array, number) => {
  let result = [];

  const filterFunction = (value, index, array) => {
    return value === (number - array[i]);
  }

  for (var i = 0; i < array.length; i++){
    let tempArray = array.filter(filterFunction);
    if (tempArray.length !== 0){
      tempArray.unshift(array[i]);
      result.push(tempArray);
    }
  }
  
  return result;
}

console.log(answer(testArray, 5));
