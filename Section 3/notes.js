/*
Objectives:

-Understand how object and arrays work while thinking about big O notation.

-Learn why it can be costly to move elements to the beginning of an array.

-Look at built in  JS methods and compare and contrast runtimes for both arrays and obbjects.


*/

/*

Big O of Objects:

-An unordered data structure; key/value pairs
Insertion: O(1)
Removal: O(1)
Searching: O(n)
Access: O(1)


When to use objects?
-When you need fast access/insertion/removal and you dont need order.

Big O of Objects Methods:

Object.keys: O(n)
Object.values: O(n)
Object.entries: O(n)
hasOwnProperty: O(1)



*/

/*

Arrays:

-Ordered data structure


When to use arrays?
-When you need order or need to iterate 
-When you need to insert something at the end of a list or fast accesss.

Whats going on behind the scenes when accessing data by index?
Javascript isnt going one by one through each index. It jumps straight to the index, if it exists.

Insertion:
-Inserting something at the end of an array is constant time O(1)
-Inserting something at the beginning or middle of an array can impact performance because it has to reindex all/some of element again.

Removal:
-Removing something at the beginning of the array and in the middle can also impact performance because now it has to reindex all/some of element again after removing an element.

.push() and .pop() is always faster than .shift() and .unshift()

Searching for elements is O(n)
Accessing elements is O(1)


Big O of some Array Methods

.push() and .pop() are O(1) or constant
.shift() and .unshift() are O(n) 
.concat() is O(n)
.slice() is O(n)
.forEach(), .map(), .filter(), .reduce() are O(n)
*/
