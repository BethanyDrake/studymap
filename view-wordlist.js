
const wordlist = document.getElementById("wordlist");
const toListItem = function (string)
{
   var listItem = document.createElement("li");
   listItem.innerHTML = string;
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
