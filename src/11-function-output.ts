export {};

function concatenate(firstWord = "Hello", secondWord = "from", thirdWord = "CODELEX") {
  return firstWord.concat(' ').concat(secondWord).concat(' ').concat(thirdWord)
  // Write the body of this function to concatenate three words together with space between them
}

const result = concatenate();
console.log(result); // Expected output: "Hello from CODELEX"
