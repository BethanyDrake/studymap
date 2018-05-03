const displayWordlist = function(savedData)
{
  document.getElementById("wordlist").textContent = savedData.wordlist;

};
chrome.storage.sync.get('wordlist', displayWordlist);
