export {};

function trimWord(word = "  CODELEX ") {
  return word.trim();
}

const result = trimWord("  CODELEX ");
console.log(result); // Expected output: "CODELEX"
