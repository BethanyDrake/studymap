console.log("addwordscript is running!");
var wordToAdd = window.getSelection().toString();
console.log("word to add: " + wordToAdd);

var saveWordToAdd = function(savedData)
{
  if (!savedData.wordlist)
  {
    chrome.storage.sync.set({'wordlist':''});
  }
    var newWordlist = wordToAdd +"," +savedData.wordlist;
    console.log("saving... " + wordToAdd);
    chrome.storage.sync.set({'wordlist':newWordlist});

};
chrome.storage.sync.get('wordlist', saveWordToAdd);
