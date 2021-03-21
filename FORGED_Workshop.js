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
