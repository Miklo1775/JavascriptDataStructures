//Big O Notation
// const addUpTo = (n) => {
//   let total = 0;
//   for (let i = 1; i <= n; i++) {
//     total += i;
//   }
//   return total;
// };
// // addUpTo(6);
// // console.log(addUpTo(6));

// const addUpToShort = (n) => {
//   return (n * (n + 1)) / 2;
// };
// // console.log(addUpToShort(6));

// addUpToShort(6);
// const time1 = performance.now() / 1000;
// console.log(time1);

// What is this Big O?

//It allows us to talk formally about how the runtime of an algorithm grows as the inputs grow

//Its all about the broad trends and worst case scenario

//the function below would be O(1) because no matter the number of inputs, the number of operations is constanly 3

// function addUpTo() {
//     return n * (n + 1) / 2;
// }

//for the function below,

// function addUpTo(n) {
//   let total = 0;
//   for (let i = 0; i < n; i++) {
//     total += 1;
//   }
//   return total;
// }

//Rules of thumb:
//-Constants dont matter:
//----O(2n) ---> O(n)
//----O(500) ---> O(1)
//----O(13n^2) --->O(n^2)

//-Smaller terms dont matter
//----O(n + 10) ---> O(n)
//----O(1000n + 50) ---> O(n)
//----O(n^2 + 5n + 8) ---> O(n^2)

//Big O Shorthands

//1. Arithmetic operations are constant
//2.Variable assignment is constant
//3. Accessing elements in an array (by index) or object(by key) is constant.
//4. In a loop, the complexity is the length of the loop times the complexity of whatever happens inside of the loop.

//Space Complexity

//auxillary space complexity refers to space requried by the algorithm

//Space Complexity in JS

//Rules of Thumb:
//--Most primitives(booleans, numbers, undefined, null) are constant space.
//--Strings require O(n) space (where n is the string length)
//--Reference types are generally O(n), where n is the length(for arrays) or the number of keys (for objects)

//LOGARITHMS :(

//Logarithim is the opposite of exponentiation