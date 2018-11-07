
let list = [2, 4, 6, 7, 10];
let index = 2;
let a = 5;
let b = -3;
let greeting = 'Hello World';
let property = 'length';


// Logs 6 to the console
console.log(list[2]);
// Logs 6 to the console
console.log(list[1 + 1]);
// Logs 6 to the console
console.log(list[index]);
//  Logs 6 to the console
console.log(list[a + b]);
// Logs 11 to the console. This method is preferred using a DOT before the property.
console.log(greeting.length);
// Logs 11 to the console
console.log(greeting['length']);
// Logs 11 to the console
console.log(greeting[property]);
// Logs "function" to the console
console.log(typeof greeting.toUpperCase);
// Logs "Hello World" to the console
console.log(greeting.toUpperCase());
// Examples of manipulating data using [2, 4, 6, 7, 10] above
// will list [2, 4, 6, 7, 10] and the length number on the html/console
console.log(list);
// Use .array like below as a shorthand version of console.log(list)
// push will add new elements to an array, and returns the new length of the array. 
list.push(3); 
// PUSH - added the number [3] to our list [2, 4, 6, 7, 10] and increased the length from 5 to 6.
console.log(list.pop());
// POP - pops out the number --> [3] on its on and not in the array
list.unshift(3);  
// [3] went from bottom to the top of the string list/
// UNSHIFT - Inserts new elements at the start of an array.
list.shift();
//  [3] was removed from the array
//  SHIFT - Removes the first element from an array and returns it.
list = list.concat([3, 4]);
// CONCAT - Combines two or more arrays and places them inside the list. Cannot use shortcuts, must use ___ = ____.concat
// List becomes [2, 4, 6, 7, 10, 3, 4]

// NOTES
// index - think of it as amount of items to skip when starting at the first item in an array
// .length can call to access the length property that exists on all strings. Example: Hello World
// In javascript you can access properties of an object in two different ways:
// ..with a dot and with square brackets [] 
// Example Hello World with property = length
// Length of an array and string are exampled above.
// Strings and arrays contain properties that are functions. These property functions are called methods.
// 