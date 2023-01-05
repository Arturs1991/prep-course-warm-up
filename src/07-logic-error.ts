export {};

function trim(word = "CODELEX  ") {
  return word.trim();
}

const result = trim();
console.log(result); // Expected output: "CODELEX"
