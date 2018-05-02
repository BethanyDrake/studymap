console.log("hi there!");
const saveButton = document.getElementById("save");
const viewButton = document.getElementById("view");
saveButton.onclick = function(){console.log("saved!")};
viewButton.onclick = function(){
    var newURL = "view-saved-pages.html";
    chrome.tabs.create({ url: newURL });
  };
