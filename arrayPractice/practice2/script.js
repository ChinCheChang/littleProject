// input [1, "2", "3", 2]
// output [[1,2], ["2", "3"]]

let array = [1, "2", "3", 2];

const classifyType = (array) => {
  let container = [];
  let stringArray = [];
  let numberArray = [];

  for (let i = 0; i < array.length; i++){
    if (typeof(array[i]) === "string" ) {
      stringArray.push(array[i]);
    }else if(typeof(array[i]) === "number"){
      numberArray.push(array[i]);
    }
  }
  container.push(numberArray);
  container.push(stringArray);
  return container;
}

//classifyType(array);
