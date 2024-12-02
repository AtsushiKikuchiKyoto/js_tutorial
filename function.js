let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"]

// URL変換 : "N d" -> "n-d"
function urlify(string){
  return string.toLowerCase().split(/\s+/).join("-");
};

// URL生成：命令型バージョン
function imperativeUrls(elements){
  let urls = [];
  // forEach version
  elements.forEach(function(element){
      urls.push(urlify(element));
    });
  return urls;
};
console.log(imperativeUrls(states));

// URL生成：関数型バージョン
function functionalUrls(elements){
  return elements.map(element => urlify(element));
};
console.log(functionalUrls(states));