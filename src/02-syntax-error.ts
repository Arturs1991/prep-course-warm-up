export {};

function addNumbers(a = 1, b = 3, c = 4) {
   return a + b + c;
}

const result = addNumbers(1, 3, 4);
console.log(result); // Expected output: 8
