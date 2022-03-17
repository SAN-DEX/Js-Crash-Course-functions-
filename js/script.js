// // do while loop
let i = 10;
do {
  console.log(i);
  i++;
} while (i <= 5);

// // break and continue
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    console.log("five");
    break;
  }

  console.log(i);
}

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    console.log("five");
    continue;
  }

  console.log(i);
}

// a  function
function unit() {
  console.log("unit");
}
unit();
unit();
unit();
unit();

// a function with a parameter
function myself(name) {
  console.log("My name is ", name);
}
myself("joe");
myself("afia");
myself("kwesi");
myself("nana");
myself("anna");

// function with a return value
function add(x, y) {
  return x + y;
}
let result = add(2, 4);
console.log(result);

function multiply(x, y) {
  return x * y;
}
let result2 = multiply(2, 4);
console.log(result2);

// fat arrow function
let divide = (x, y) => x / y;
let div = divide(20, 2);
console.log(div);

// higher order function: takes a function with parameters
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let squares = numbers.map((number) => number * number);
console.log(squares);

// filter
let evens = numbers.filter((number) => number % 2 === 0);
console.log(evens);

// find
let five = numbers.find((number) => number === 5);
console.log(five);

// String
let sentence = "The quick brown fox jumps over the lazy dog";
console.log(sentence.length);
console.log(sentence.concat(" fii"));
console.log(sentence.endsWith(" dog"));
console.log(sentence.includes(" hello"));
console.log(sentence.includes(" over"));
console.log(sentence.indexOf("f"));
console.log(sentence.indexOf("o", 13));
console.log(sentence.padStart(60));
console.log(sentence.padEnd(60, "*"));
console.log(sentence.replace("lazy", "hardworking"));
console.log(sentence.slice(5));
console.log(sentence.slice(5, 10));
console.log(sentence.toUpperCase());
console.log(sentence.toLowerCase());
console.log(sentence.split(" "));
console.log(sentence.split(""));
// console.log(sentence.repeat(5));
// console.log(sentence.repeat(5));
// console.log(sentence.repeat(5));
