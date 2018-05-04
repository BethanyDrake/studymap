console.log("addwordscript is running!");
var wordToAdd = window.getSelection().toString();
console.log("word to add: " + wordToAdd);


var notEqualTo = function(thing){
  return function (word){
    if (word == thing) return false;
    return true;
  }
};


var concatWithCommas = function(accumulator, currentValue){
  return accumulator + ',' + currentValue;
};

var saveWordToAdd = function(savedData)
{
  if (!savedData.wordlist)
  {
    chrome.storage.sync.set({'wordlist':''});
  }

    var oldList = savedData.wordlist.split(',');
    var filteredOldList = oldList.filter(notEqualTo(wordToAdd)).reduce(concatWithCommas, '');
    var newWordlist = wordToAdd +"," +filteredOldList;
    console.log("saving... " + wordToAdd);
    chrome.storage.sync.set({'wordlist':newWordlist});

};
chrome.storage.sync.get('wordlist', saveWordToAdd);
