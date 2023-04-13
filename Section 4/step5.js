/*
LOOK BACK AND REFRACTOR
*/

/*

Refactoring Questions:

-Can you check the what the result is and could you achieve that result any other way?
-Is your solution useable in another solution?
-Any other ways of refratoring such as ways of increasing performance?
-What other solutions have you found?

*/

/*

const charCount = (str) => {
    const obj = {}
    for(let i = 0; i < str.length; i++){
        let char = stri[i].toLowerCase()
        if(/a-z0-9/.test(char)){
            if(obj[char] > 0) {
                obj[char]++
            } else {
                obj[char] = 1;1
            }
        }
    }
    return obj
}

const charCount = (str) => {
    const obj = {}
    for(let char of str){
        char = char.toLowerCase()
        if(/a-z0-9/.test(char)){
           obj[char] = ++obj[char] || 1;
        }
    }
    return obj
}



*/
