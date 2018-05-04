const toLinkNode = function(linkText){

  var pNode = document.createElement("li");
  var linkNode = document.createElement("a");
  linkNode.textContent = linkText;
  linkNode.href = linkText;
  pNode.appendChild(linkNode);
  return pNode;
};

const toSingleNode = function(parentNode, currentNode){
  if (!parentNode){
    parentNode = document.createElement('ul');
  };
  parentNode.appendChild(currentNode);
  return parentNode;
};

const displayPages = function(result) {
          var splitPages = result.pages.split(',');
          splitPages.map(toLinkNode)
                    .reduce(toSingleNode, savedPagesNode);
        };


const clearBookmarks = function(){
  chrome.storage.sync.set({'pages':''});
  savedPagesNode.innerHTML = '';

};
var seachQuery = '';
var whereToDisplay;
const containsSearchQuery = function(pageURL){
  var xhttp = new XMLHttpRequest();
  var done = 'no response recieved';
  var result = false;
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var responseString = this.responseText;

      result = responseString.includes(searchQuery);
    }

  };
  xhttp.open("GET", pageURL, false);
  xhttp.send();
  return result;
};

const displayRelevantPages =  function(result) {
          var splitPages = result.pages.split(',');
          whereToDisplay.innerHTML = '';
          splitPages.filter(containsSearchQuery)
                    .map(toLinkNode)
                    .reduce(toSingleNode, whereToDisplay);
        };
