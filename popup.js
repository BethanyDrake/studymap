
const saveButton = document.getElementById("save");
const viewButton = document.getElementById("viewPages");
const wordlistButton = document.getElementById("viewWordlist");
const addWordButton = document.getElementById("addWord");
const textBox = document.getElementById("textBox1");


var currentURL = 'not set'


const saveFoundURL = function(savedData)
{
  if (!savedData.pages)
  {
    chrome.storage.sync.set({'pages':''});
  }
    var newPages = savedData.pages +"," +currentURL;
    console.log("saving... " + currentURL);
    chrome.storage.sync.set({'pages':newPages});

};

const saveCurrentPage = function()
{
      chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
      currentURL = tabs[0].url;
      chrome.storage.sync.get('pages', saveFoundURL);
  });

};


// saveButton.onclick = function(){
//     console.log("saved!");
//     saveCurrentPage();
//
//   };

viewButton.onclick = function(){
    var newURL = "view-saved-pages.html";
    chrome.tabs.create({ url: newURL });
  };

  wordlistButton.onclick = function(){
    var newURL = "view-wordlist.html";
    chrome.tabs.create({ url: newURL });
  };

  // addWordButton.onclick = function(){
  //   console.log(window.getSelection);
  //   textBox.textContent = window.getSelection().toString();
  // };
