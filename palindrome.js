// 文字列を逆順にして返す
function reverse(string){
  // return string.split("").reverse().join("");
  return Array.from(string).reverse().join("");
};

function palindrome(string){
  let processedContent = string.toLowerCase();
  return processedContent === reverse(processedContent);
};

// console.log(palindrome("aBcba"));