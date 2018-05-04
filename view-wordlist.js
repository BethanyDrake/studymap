


const wordlist = document.getElementById("wordlist");

const getOnClickFunction = function (listItem){
  return function (e){
    alert(listItem.innerText);
    innerList = document.createElement("ul");
    templistItem = document.createElement('li');
    templistItem.innerText = "loading...";
    innerList.appendChild(templistItem);

    searchQuery = listItem.innerText;

    whereToDisplay = innerList;
    chrome.storage.sync.get('pages', displayRelevantPages);
    listItem.appendChild(innerList);
  };
};

const toListItem = function (string)
{
   var listItem = document.createElement("li");
   listItem.innerText = string;
   listItem.onclick = getOnClickFunction(listItem);
   return listItem;
};

const toList = function (list, nextListItem)
{
  list.appendChild(nextListItem);
  return list;
};

const stringToHtmlList = function (string, list){

  if (!list){
    list = document.createElement("ul");
  };
  return string.split(',').map(toListItem)
                  .reduce(toList, list);
};

const displayWordlist = function(savedData)
{
  wordlist.innerText = '';
  stringToHtmlList(savedData.wordlist, wordlist);

};
chrome.storage.sync.get('wordlist', displayWordlist);
