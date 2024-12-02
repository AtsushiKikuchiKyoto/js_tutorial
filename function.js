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

// filter() ,1単語の抽出：関数バージョン
function functionalSingles(elements){
  return elements.filter(element => element.split(/\s+/).length === 1);
};
console.log(functionalSingles(states));

// filter() ,練習問題：Dakota抽出
function filterByString(elements, string){
  return elements.filter(element => element.includes(string));
};
console.log(filterByString(states, "Dakota"));


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// sum: 命令型バージョン
function imperativeSum(elements) {
  let total = 0;
  elements.forEach(function(n) {
    total += n;
  });
  return total;
}
console.log(imperativeSum(numbers));

// sum: 関数型バージョン
function functionalSum(elements) {
  return elements.reduce((total, n) => { return total += n; });
}
console.log(functionalSum(numbers));