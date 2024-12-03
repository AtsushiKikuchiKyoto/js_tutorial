let Phrase = require("atsushikk-palindrome");

function palindromeTester(){
  let string = prompt("パリンドロームをテストしたい文字列を入力してください:")
  let phrase = new Phrase(string);
  let palindromeResult = document.querySelector("#palindromeResult");
  
  if (phrase.palindrome()){
    palindromeResult.innerHTML= `"${phrase.content}"はパリンドロームです`;
  } else {
    palindromeResult.innerHTML= `"${phrase.content}"はパリンドロームではありません`;
  };
};

document.addEventListener("DOMContentLoaded", function(){
  let button = document.querySelector("#palindromeTester");
  button.addEventListener("click",function(){
    palindromeTester();
  });
});

// $ browserify main.js -o bundle.js