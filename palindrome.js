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

function emailParts(email){
  let user = email.split("@")[0];
  let domain = email.split("@")[1];
  return [user, domain];
};

console.log(emailParts("abc@def.com"));
