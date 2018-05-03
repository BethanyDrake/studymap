
const wordlist = document.getElementById("wordlist");

const getOnClickFunction = function (string){
  return function (e){alert(string)};
};

const toListItem = function (string)
{
   var listItem = document.createElement("li");
   listItem.innerHTML = string;
   listItem.onclick = getOnClickFunction(string);
   return listItem;
};

const toList = function (list, nextListItem)
{
  list.appendChild(nextListItem);
  return list;
};

const stringToHtmlList = function (string){
  return string.split(',').map(toListItem)
                  .reduce(toList, wordlist);
};

const displayWordlist = function(savedData)
{
  wordlist.innerText = '';
  stringToHtmlList(savedData.wordlist);

};
chrome.storage.sync.get('wordlist', displayWordlist);
