console.log("addwordscript is running!");
var wordToAdd = window.getSelection().toString();
console.log("word to add: " + wordToAdd);


const saveWordToAdd = function(savedData)
{
  if (!savedData.wordlist)
  {
    chrome.storage.sync.set({'wordlist':''});
  }
    var newWordlist = savedData.wordlist +"," +wordToAdd;
    console.log("saving... " + wordToAdd);
    chrome.storage.sync.set({'wordlist':newWordlist});

};
chrome.storage.sync.get('wordlist', saveWordToAdd);
