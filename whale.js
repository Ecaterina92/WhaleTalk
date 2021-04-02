let input = 'I like to read'; // Introduced a variable input
const vowels = ['I', 'i', 'e', 'o', 'e', 'a']; // Introduced a variable vowels
let resultArray = []; // Created an empty array as a value to the resultArray variable
for (i = 0; i < input.length; i++) {
    console.log(input.charAt[i]);// Logged the iterator numbered position in the for loop
    for(j = 0; j < vowels.length; j++) {
        console.log(vowels[j]);
        if(input[i] === vowels[j]) {
            if(input[i] === 'e') {
                resultArray.push('ee');
            }
        } else if(input[i] === 'u') {
            resultArray.push('uu');
        } else {
            resultArray.push(vowels[j]);
        }
    } 
};
console.log(resultArray.join('').toUpperCase());
