// shell name example
hello.sh  

//to print whatever is in the parenthesis in command line
echo '====='
// if permission is denied, chmod +x ./hello.sh
// then to execute the shell, ./hello.sh

// pwd to find path. print working directory 

// cd ~ takes you back to the root working directory \

// ls -a to show hidden files in the directory 

// a stack, a queue and a heap = js data structures
// a stack is LIFO. last in , first out.
//  callback queue is FIFO first in , first out. 
// array.pop removes the last position in an array 
// array.push adds to the end of an array
// JSON.stringigy() can change an array to a string
// array.shift moves all positions in an array forward and removes the first position
// array.unshift addes one or more to the start of an array 
/
// the line of code currently executing is call the thread of execution or TOE

// <|f|> is shorthand for the function's parameters, return ttype an definition

// console.trace() display what s currently on the call stack
// anonymous is main()

// example of async timeout function
function sayHello() {
    setTimeout( () => console.log("Hello world"), 1000);
    function sayGoodbye() {
      console.log("See ya");
    }
  
    console.log("Good Morning");
    sayGoodbye();
  }
  
  sayHello();

// example of a factory function - produce objects with a function, returns object literals 
// ..instead of functions, 
const tiger = function() {
    const noise = 'roar';
    // returns an object literal that contains the method sound
    return {
      sound: function() {
        console.log(noise);
      },
    }
  }
  
  const tigger = tiger();
  tigger.sound(); //=> "roar"
// compare the above to the way we usually make this function(below)
// class function equivalent 
class Tiger {
    constructor() {
      this.noise = 'roar';
    }
    sound() {
      console.log(this.noise)
    }
  }
  
  const simba = new Tiger();
  simba.sound(); //=> "roar"

//hierarchical tree that shows how inhertiance can share methods
// for example , phone is able to .takeVideo()
Device
  .takeVideo()
  .takePicture()

    Phone
      .call()

    Tablet
      .browseInternet()

Appliance
  .makeNoise()

    Laundry
      .washClothes()

    Refrigerator
      .chill()

// composition pattern designed types based on what they do
// factory functions allow a compositiion pattern
// does not rely on inheriting traits
// parentheses wrapping the body of the function indicates an object literal is being returned
// accept state through parameter instead of creating state internally
const chiller = (state) => ({
    chill: () => console.log(`Ooh, I'm at ${state.temp} degrees`) 
  })
  
  const caller = (state) => ({
    call: () => console.log(`I am calling ${state.number}`)
  })
  
  const browserInternet = (state) => ({
    browse: () => state.url
  })
  
  caller({number: '411'}).call() //=> I am calling 411

//create the chillinator factory function with only behavior we want
const chillinator = (temp) => {
    let state = {
      temp,
      number: 311,
      url: 'google.com'
    }
    // using spread operator to create an object that will be returned 
    // ..by the factory function
    return { ...chiller(state), ...caller(state), ...browserInternet(state) }
  }
// chillinator(42).chill() will return Ooh, i'm at 42 degrees

// eexample of not being able to access the name property in robot. 
// this has been reassigned to window. this.name returns as undefined. 
const robot = {
    name: "rumba",
    clean() {
      alert(`${this.name} is now cleaning`);
    }
  };
  
  setTimeout(robot.clean, 0); //=>  is now cleaning


//clickHander1()does not work . the arrow shorthand syntax binds
// ..this to the parent scope instead of the referencing the button element
  const clickHandler1 = () => {
    this.textContent = 'Clicked!';
  };
//   using regular function syntax fixes this problem 
  const clickHandler2 = function() {
    this.textContent = 'Clicked!';
  };
  
  buttonEl.addEventListener('click', clickHandler1);

//example of using data-* to track clicks
<button id="my-button" data-count="0">Clicks: 0</button>
const buttonEl = document.getElementById('my-button');

const clickHandler = function() {
  let count = parseInt(this.getAttribute('data-count'));
  count++;

  this.setAttribute('data-count', count);
  this.textContent = `Clicks: ${count}`;
};

buttonEl.addEventListener('click', clickHandler);

// example to do the same using a closure
const buttonEl = document.getElementById('my-button');

const clickHandler = function() {
  let count = 0;

  return function() {
    count++;
    this.textContent = `Clicks: ${count}`;
  };
};

buttonEl.addEventListener('click', clickHandler());

// if there are more buttons to run, attach the same self contained closure to every
// ..button element
const buttons = document.getElementsByTagName('button');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', clickHandler());
}

// example of the same with event delegation
<div id="container">
  <button>Button #1</button>
  <button>Button #2</button>
  <button>Button #3</button>
  <button>Button #4</button>
  <button>Button #5</button>
</div>


const containerEl = document.getElementById('container');

const clickHandler = function(event) {
  if (event.target.matches('button')) {
    event.target.textContent = 'Clicked!';
  }
};

containerEl.addEventListener('click', clickHandler);

// find a position in an index
findIndex(23) 
const findIndex = (num) => {
  for (let i = 0; i < data.length; i++) {
    if (data[i] === num) {
      console.log(`${num} found at index ${i}`);
    }
  }
};

// binary search example
const data = [12, 23, 38, 40, 54, 62, 71, 87, 99];

const binarySearch = (arr, num) => {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((left + right) / 2);

  if (num === arr[middle]) {
    return 'found it';
  }
  else if (num < arr[middle]) {
    right = middle;
    return `bring right down to ${right}`;
  }
  else if (num > arr[middle]) {
    left = middle + 1;
    return `bring left up to ${left}`;
  }
};

console.log(binarySearch(data, 38));

// example of a recursion for the above
const data = [12, 23, 38, 40, 54, 62, 71, 87, 99];

const binarySearch = (arr, num, left, right) => {
  let middle = Math.floor((left + right) / 2);

  // range overlapped, so never found number
  if (left > right) {
    return -1;
  }
  else if (num === arr[middle]) {
    return middle;
  }
  else if (num < arr[middle]) {
    // call again with a new right value
    return binarySearch(arr, num, left, middle - 1);
  }
  else {
    // call again with a new left value
    return binarySearch(arr, num, middle + 1, right);
  }
};

// set initial left and right values on first call
console.log(binarySearch(data, 12, 0, data.length - 1));

// example of a recursion
const askForFriend = () => {
  inquirer.prompt({
    type: 'input',
    message: 'Enter a name:',
    name: 'friend'
  })
  .then(({ friend }) => {
    console.log(`Hello, ${friend}!`);
    askForFriend();
  });
 };

