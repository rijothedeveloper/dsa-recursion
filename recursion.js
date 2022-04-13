/** product: calculate the product of an array of numbers. */

function product(nums, index = 0) {
  if (nums.length <= index) return 1;
  return nums[index] * product(nums, ++index);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, index = 0, longestNo = 0) {
  if (words.length <= index) return longestNo;
  if (words[index].length > longestNo) longestNo = words[index].length;
  return longest(words, ++index, longestNo);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, index = 0) {
  if (str.length <= index) return "";
  if (index % 2 === 0) {
    return str[index] + everyOther(str, ++index);
  } else {
    return everyOther(str, ++index);
  }
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, start = 0, end = str.length - 1) {
  if (start > end) return true;
  if (str[start] === str[end]) {
    start++;
    end--;
    return isPalindrome(str, start, end);
  } else {
    return false;
  }
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, index = 0) {
  if (index >= arr.length) return -1;
  if (arr[index] === val) return index;
  return findIndex(arr, val, ++index);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, index = str.length - 1) {
  if (index < 0) return "";
  return str[index] + revString(str, --index);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let valueArray = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") valueArray.push(obj[key]);
    if (typeof obj[key] === "object")
      valueArray.push(...gatherStrings(obj[key]));
  }
  return valueArray;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length - 1) {
  if (left > right) return -1;
  const mid = Math.floor((right + left) / 2);
  if (arr[mid] === val) return mid;
  if (arr[mid] > val) return binarySearch(arr, val, left, mid - 1);
  return binarySearch(arr, val, mid + 1, right);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};
