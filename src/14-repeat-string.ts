export {};

const repeatString = (char : string, lenghth : number) : string => {
    return char.repeat(length)
};
let result = '';
for (let i = 0; i < length; i++) {
result = result + char
}
return result;

console.log(repeatString("a", 4)); // Expected output: 'aaaa'
console.log(repeatString("b", 5)); // Expected output: 'bbbbb'
