/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) return 1;
  
  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length === 0) return;
  let long = words[0].length;
  if (long < longest(words.slice(1))) long = longest(words.slice(1));
  return long;
}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx=0, newStr='') {
  if (idx >= str.length) return newStr;
  newStr += str[idx];
  return everyOther(str, idx+2, newStr);
}


/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, leftIdx=0, rightIdx=str.length-1) {
  if (leftIdx > rightIdx) return true; 
  if(str[leftIdx].toLowerCase() != str[rightIdx].toLowerCase()){
    return false
  }
  return isPalindrome(str, leftIdx+1, rightIdx-1);
}


/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx=0) {
  if (idx >= arr.length) return -1
  if (arr[idx] === val) return idx;
  return findIndex(arr, val, idx+1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx=0) {
  if (idx >= str.length) return '';
  return revString(str, idx+1) + str[idx];
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, arr=[], idx=0) {
  if(idx >= Object.entries(obj).length) return arr;
  if(typeof Object.entries(obj)[idx][1] === 'object') gatherStrings(Object.entries(obj)[idx][1], arr, idx-idx);
  if(typeof Object.entries(obj)[idx][1] === 'string') arr.push(Object.entries(obj)[idx][1])
  // console.log('idx: ' + idx);
  // console.log('arr: ' + arr);
  return gatherStrings(obj, arr, idx+1);
}


/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, idx=0) {
  if (idx >= arr.length) return -1
  if (arr[idx] === val) return idx;
  return binarySearch(arr, val, idx+1);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
