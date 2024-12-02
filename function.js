let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"]

// URL変換 : "N d" -> "n-d"
function urlify(string){
  return string.toLowerCase().split(/\s+/).join("-");
};

// map()URL生成：命令型バージョン
function imperativeUrls(elements){
  let urls = [];
  // forEach version
  elements.forEach(function(element){
      urls.push(urlify(element));
    });
  return urls;
};
console.log(imperativeUrls(states));

// map()URL生成：関数型バージョン
function functionalUrls(elements){
  return elements.map(element => urlify(element));
};
console.log(functionalUrls(states));

// map()練習問題
function lettersForUrl(elements){
  let domain = "https://example.com/"
  return functionalUrls(elements).map(element => domain + element);
};
console.log(lettersForUrl(states));

// filter() ,1単語の抽出：命令バージョン
function imperativesSingles(elements){
  let singles = [];
  elements.forEach(function(element){
    if (element.split(/\s+/).length === 1){
      singles.push(element);
    };
  });
  return singles;
};
console.log(imperativesSingles(states));