// task-1

function multiply(a, b, c, d) {
  const result = a * b * c * d;
  return result;
}
const multi = multiply(4, 5, 6, 7);
console.log("1. ", multi);

// task-2

function checker(x) {
  if (x % 2 !== 0) {
    const y = x * 2;
    return y;
  } else {
    const y = x / 2;
    return y;
  }
}

const check = checker(25);
console.log("2. ", check);

// task-3

function make_avg(numbers) {
  // console.log(numbers);
  let sum = 0;
  let avg = 0;
  for (num of numbers) {
    sum = sum + num;
    avg = sum / numbers.length;
  }
  return avg;
}

const average = make_avg([10, 20, 30, 40]);
console.log("3. The average is", average);

// task-4

function count_zero(str) {
  console.log("4. The binary string is", str);
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "0") {
      count = count + 1;
    }
  }
  return count;
}

const count = count_zero("01100000001010000100000010000000000000000000000000");
console.log("The count of zero is", count);

// task-5

function odd_even(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

const oddEven = odd_even(150);
console.log("5. The number is", oddEven);

// ------------------array_looping ----------------

// task-1
const colors = ["red", "blue", "green", "yellow", "orange"];

console.log("The colors are:", colors);

let rev_colors = [];
for (const color of colors) {
  rev_colors.unshift(color);
}
console.log("The reversed colors are:", rev_colors);

// task-2
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let even_numbers = [];
for (const number of numbers) {
  if (number % 2 === 0) {
    even_numbers.push(number);
  }
}
console.log("The even numbers are:", even_numbers);

// tast-3
var names = ["Tom", "Tim", "Tin", "Tik"];
var fullName = "";
for (var name of names) {
  fullName = fullName.concat(name);
}
console.log(fullName);

// task-4
const statement = "I am a hard working person";
console.log("The statement is:", statement);
let words = statement.split(" ").reverse();
let reverse_statement = "";
for (const word of words) {
  reverse_statement += word + " ";
}
console.log("The reverse statement is:", reverse_statement);

// task-5

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let array2 = [...array];
console.log("The copy array of", array, "is:", array2);

array2[0] = 100;
console.log("The modified copy array is:", array2, array);
