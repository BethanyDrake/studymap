console.log("add bookmark script is running!");
var currentURL = window.location.href;
console.log("url to add: " + currentURL);





var saveFoundURL = function(savedData)
{
  if (!savedData.pages)
  {
    chrome.storage.sync.set({'pages':''});
  }
    var newPages = savedData.pages +"," +currentURL;
    console.log("saving... " + currentURL);
    chrome.storage.sync.set({'pages':newPages});

};

var saveCurrentPage = function()
{
  
      chrome.storage.sync.get('pages', saveFoundURL);


};

saveCurrentPage();
