export {};

function s(w1 = 'hello', w2 = 'world') {
  return w1.concat(' ').concat(w2);
}

const result = s(); // concatenate two strings - 'hello', 'world', using the function above
console.log(result); // Expected output: "hello world"
