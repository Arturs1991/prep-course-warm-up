export {};

function trimWord(word = "  CODELEX ") {
  return word.trim();
}

const result = trimWord();
console.log(result); // Expected output: "CODELEX"
