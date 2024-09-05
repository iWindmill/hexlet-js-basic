// Implement and export by default a function that reverses
// the case of each letter in a string
// The function should return the result

const invertCase = (string) => {
    let i = 0;
    let result = '';
    let reverse = '';

    while (i < string.length) {
        if (string[i] === string[i].toUpperCase()) {
            reverse = string[i].toLowerCase();
        } else {
            reverse = string[i].toUpperCase();
        }

        result = `${result}${reverse}`;
        i = i + 1;
    }

    return result;
}

console.log(invertCase('Hello, World!')); // hELLO, wORLD!
console.log(invertCase('I loVe JS')); // i LOvE js