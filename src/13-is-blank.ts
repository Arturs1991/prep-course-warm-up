export {};

/**
 * Create a function called isBlank, which checks if passed string is blank or not
 */
function isBlank(text: string | null): boolean {
    if(typeof text === 'string' && text.trim().length > 0){
         return false;
     } else {
         return true
     };
 
    }
console.log(isBlank(null)); // Expected output: true
console.log(isBlank("")); // Expected output: true
console.log(isBlank(" ")); // Expected output: true
console.log(isBlank("abc")); // Expected output: false
console.log(isBlank(" abc ")); // Expected output: false
