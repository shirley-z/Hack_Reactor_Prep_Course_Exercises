// 1. Modify your sum function from the Basic Requirements section to accept two parameters, start and end: sum should now compute the sum of the numbers from start to end, e.g.
// What happens if start is larger than end? Modify sum to check for this case and, when found, swap the start and end arguments.

function sum(start, end) {
  var largerNum = Math.max(start, end);
  var smallerNum = Math.min(start, end);
  var sum = 0;

  for (var i=smallerNum; i <=largerNum; i += 1) {
    sum += i;
  }
  
  return sum;
}

console.log(sum(2, 7)); // => 2 + 3 + 4 + 5 + 6 + 7 => 27
console.log(sum(3, 5)); // => 3 + 4 + 5 => 12




console.log('\n\n\n');




// 2. Let's pretend for a moment that JavaScript does not have the addition operator + -- instead, it comes with two functions called inc and dec that perform increment and decrement respectively.

// Your task is to write a function called add that takes two numbers as parameters, x and y, and adds them together. The catch is that you can only use inc and dec to accomplish this.

// ignore the fact that inc makes use of +
function inc(x) {
  return x + 1;
}

function dec(x) {
  return x - 1;
}

function add(x, y) {
  var sum = Math.min(x, y);
  var max = Math.max(x,y);

  function operate(num,posNeg){
    return posNeg<0 ? dec(num): inc(num);
  }

  for (var i = 0; i < Math.abs(max); i++) {
    sum = operate(sum,max);
  }

  return sum;
}

console.log(add(110,-9));
console.log(add(-1,-9));
console.log(add(-10,-9));
console.log(add(10,9));
console.log(add(10,-100));
console.log(add(-10,-100));
console.log(add(-10,10));
console.log(add(0,2));
console.log(add(0,-2));
console.log(add(2,0));
console.log(add(-9,0));
