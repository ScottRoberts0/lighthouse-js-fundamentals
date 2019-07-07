
function isOdd(num){
  if(num === 0){
    return false;
  }
  return !(num % 2 === 0);
}

console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));
console.log("0 is odd: " + isOdd(0));