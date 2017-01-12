var sum = 0;
var i = 0;

while (i < 1000) {
  if (i % 3 === 0) {
    sum = sum + i;
    i++;
  }
  else if (i % 5 === 0) {
    sum = sum + i;
    i++;
  }
  else {
    i++;
  }
}

console.log("Total is", sum);