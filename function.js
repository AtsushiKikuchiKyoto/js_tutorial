let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"]

// URL生成：命令型バージョン
function imperativeUrls(elements){
  let urls = [];
  // forEach version
  elements.forEach(function(element){
    urls.push(element.toLowerCase().split(/\s+/).join("-"));
  });
  return urls;
};
console.log(imperativeUrls(states));