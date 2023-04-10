/*

The Big O of Objects:

-Objects: Unordered, key value pairs.
-When to use: 
----When you dont need order.
----When you need fast access / insertion and removal
-Insertion - O(1)
Removal - O(1)
Searching - O(N)
Access - O(1)


let instructor = {
  firstName: "Kelly",
  isInstructor: true,
  favoriteNumbers: [1, 2, 3, 4],
};

Big O of Object Methods:
Object.keys - O(N)
Object.values - O(N)
Object.entries - O(N)
hasOwnProperty - O(1)
*/
/*

Big O of arrays:

-Arrays: Ordered list
-When to use:
----When you need order.
----When you need fast access / insertion and removal

-Removing and adding things to the end of an array is a much more efficient process that adding or removing things from the beginning of an array.
-This is due to having to reindex whenever something is put or removed at the beginning.

Big O of Array Methods:
-push -> O(1)
-pop -> O(1)
-shift -> O(N)
-unshift -> O(N)
-concat -> O(N)
-slice -> O(N)
-splice -> O(N)
-sort -> O(N * log N)
-forEach/map/filter/reduce/etc -> O(N)



*/
