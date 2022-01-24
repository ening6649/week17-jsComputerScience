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