


const executeScriptCallback = function(tab){
    console.log("execute script callback");
};




const addWordListener = function(command){
  if (!window) alert("no window!");
  console.log("hiya!");

  var details = {"file":"addword.js", "runAt":"document_end"};

  chrome.tabs.executeScript(details, executeScriptCallback);


//   chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
//   currentURL = tabs[0].url;
//   chrome.storage.sync.get('pages', saveFoundURL);
// });


};
  chrome.commands.onCommand.addListener(addWordListener);
