// find a number example 
const mostDuplicates = (arr) => {
    let mostValue;
    let mostCount = 0;
  
    for (let i = 0; i < arr.length; i++) {
      let counter = 0;
  
      for (let j = 0; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          counter++;
        }
      }
  
      if (counter > mostCount) {
        mostCount = counter;
        mostValue = arr[i];
      }
    }
  
    return `${mostValue} appeared ${mostCount} times.`;
  };