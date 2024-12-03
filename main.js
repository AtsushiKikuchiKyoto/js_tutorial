let Phrase = require("atsushikk-palindrome");

function palindromeTester(){
  let string = prompt("パリンドロームをテストしたい文字列を入力してください:")
  let phrase = new Phrase(string);
  
  if (phrase.palindrome()){
    alert(`"${phrase.content}"はパリンドロームです`);
  } else {
    alert(`"${phrase.content}"はパリンドロームではありません`);
  };
};

document.addEventListener("DOMContentLoaded", function(){
  let form = document.querySelector("#palindromeTester");
  form.addEventListener("submit",function(){
    palindromeTester();
  });
});

// $ browserify main.js -o bundle.js