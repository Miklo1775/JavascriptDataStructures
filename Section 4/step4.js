/*
SOLVE || SIMPLIFY
*/

/*

-Solve the problem..if that is not possible, then try solving a much easier one. Keeps you focused on the entire situation without being stuck on one problem and making no progress.

*/

/*

SIMPLIFY
-Find the core difficulty in what you are trying to do.
-Temp ignore that challenge.
-Write a simplified solution.
-Then build that challenge back in.

 */

/*

Write a function which takes in a string and returns counts of each character in the string.

const charCount = (str) => {

    const results = {}
    for (let i = 0; i < str.length; i++){
        let char = str[i].toLowerCase()
        if(results[char] > 0){
            results[char]++
        } else {
            results[char] = 1;
        }
    }

return results;
}

 */
