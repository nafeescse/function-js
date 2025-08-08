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
