


let executeScriptCallback = function(tab){
    console.log("execute script callback");
};


let unlightLogo = function()
{
  chrome.browserAction.setIcon({
    path : "simpleLogo.png"
  });
};

let addWordListener = function(command){


  console.log("command heard");
  if(command == "add_to_wordlist"){
    console.log("command accepted");
  }
  else{ return;}
  if (!window) alert("no window!");

  chrome.browserAction.setIcon({
    path : "logoBright.png"
  });
  setTimeout(unlightLogo, 2000);

  var details = {"file":"addword.js", "runAt":"document_end"};

  chrome.tabs.executeScript(details, executeScriptCallback);
};

let addBookmarkListener = function(command){

  console.log("command heard");
  if(command == "add_page_bookmarks"){
    console.log("command accepted");
  }
  else{ return;}
  if (!window) alert("no window!");

  var details = {"file":"addBookmark.js", "runAt":"document_end"};

  chrome.tabs.executeScript(details, executeScriptCallback);
};

//   chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
//   currentURL = tabs[0].url;
//   chrome.storage.sync.get('pages', saveFoundURL);
// });

  chrome.commands.onCommand.addListener(addWordListener);
  chrome.commands.onCommand.addListener(addBookmarkListener);
