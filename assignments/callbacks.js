// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];


/* 

  GIVEN THIS PROBLEM:

  function firstItem(arr, cb) {
    firstItem passes the first item of the given array to the callback function.
  }

  SOLUTION:

  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  NOTES ON THE SOLUTION:

  firstItem is a higher order function.
  It expects a callback (referred to as `cb`) as its second argument.
  To test our solution, we can use the given `items` array and a variety of callbacks.
  Note how callbacks can be declared separately, or inlined.

  TEST 1 (inlined callback):

  const test1 = firstItem(items, item => `I love my ${item}!`);
  console.log(test1); // "I love my Pencil!"

  TEST 2 (declaring callback before hand):

  function logExorbitantPrice(article) {
    return `this ${article} is worth a million dollars!`;
  };

  const test2 = firstItem(items, logExorbitantPrice);
  console.log(test2); // "this Pencil is worth a million dollars!"
*/


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}
// test
  const test1 = getLength(items, (item) => `I have ${item} items with me`);
  console.log(test1)



function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length - 1]);
}
// test
  const own = last(items, (have) => `My last item is a stick of ${have}`);
  console.log(own);



function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x + y);
}
//test
function callback(sum) {
  return `Three plus four is equal to ${sum}`;
}
const total = sumNums(3, 4, callback);
console.log(total);



function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x*y);
}
// test
const multiplication = multiplyNums(3,4,(multiply) => `Three times four is ${multiply}`);
console.log(multiplication);




function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
    return cb(item, list)
}
// test
function check(arr, listing) {
  if (arr.includes(listing)) {
    return true;
  }
}
const kevin = contains(items, 'Pencil', check);
console.log(kevin);



/* STRETCH PROBLEM */

const removeDuplicates = function(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  return cb(array);
}

const arrayUnique = function (arr) {
  return arr.filter(function (item, index) {
    return arr.indexOf(item) === index;
  })
}

var uniqueItems = removeDuplicates(items, arrayUnique);

console.log(uniqueItems);


// stretch using 'set'
// const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum', 'Gum', 'Pencil'];
// let unique = [...new Set(items)];
// console.log(unique);