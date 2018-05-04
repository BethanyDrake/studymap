console.log("add bookmark script is running!");
var currentURL = window.location.href;
console.log("url to add: " + currentURL);


var notEqualTo = function(thing){
  return function (word){
    if (word == thing) return false;
    return true;
  }
};


var concatWithCommas = function(accumulator, currentValue){
  return accumulator + ',' + currentValue;
};



var saveFoundURL = function(savedData)
{
  if (!savedData.pages)
  {
    chrome.storage.sync.set({'pages':''});
  }

    var oldList = savedData.pages.split(',');
    var filteredOldList = oldList.filter(notEqualTo(currentURL)).reduce(concatWithCommas, '');
    var newPages = currentURL + "," +filteredOldList;
    console.log("saving... " + currentURL);
    chrome.storage.sync.set({'pages':newPages});

};

var saveCurrentPage = function()
{
      chrome.storage.sync.get('pages', saveFoundURL);
};

saveCurrentPage();
