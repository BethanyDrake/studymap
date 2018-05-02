
const saveButton = document.getElementById("save");
const viewButton = document.getElementById("view");


const initialiseNumSaves = function(savedData) {

          if (!savedData.numSaves)
          {
            chrome.storage.sync.set({'numSaves':'0'});
          }
        };


chrome.storage.sync.get('numSaves', initialiseNumSaves)

const increaseBy1 = function(savedData)
{
  chrome.storage.sync.set({'numSaves':savedData.numSaves + '+1'});
}

saveButton.onclick = function(){
    console.log("saved!");
    let numSaves = chrome.storage.sync.get('numSaves', increaseBy1);
    chrome.storage.sync.set({'numSaves':numSaves});
  };

viewButton.onclick = function(){
    var newURL = "view-saved-pages.html";
    chrome.tabs.create({ url: newURL });
  };
