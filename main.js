let Phrase = require("atsushikk-palindrome");

function palindromeTester(event){
  event.preventDefault();

  let phrase = new Phrase(event.target.phrase.value);//name属性のphrase
  let palindromeResult = document.querySelector("#palindromeResult");
  
  if (phrase.palindrome()){
    palindromeResult.innerHTML= `"${phrase.content}"はパリンドロームです`;
  } else {
    palindromeResult.innerHTML= `"${phrase.content}"はパリンドロームではありません`;
  };
};

document.addEventListener("DOMContentLoaded", function(){
  let tester = document.querySelector("#palindromeTester");
  tester.addEventListener("submit",function(event){
    palindromeTester(event);
  });
});

// $ browserify main.js -o bundle.js