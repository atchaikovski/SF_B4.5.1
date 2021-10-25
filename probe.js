var unique = require('array-unique');
 
var arr = ['map', 'abyss', 'cat', 'back', 'thin', 'blue', 'cat'];
console.log(unique(arr)) 
console.log(arr)
 
var unique = require("array-unique").immutable;
 
var arr = ['alpha', 'bravo', 'charlie', 'charlie', 'delta'];
console.log(unique(arr)) 
console.log(arr)
