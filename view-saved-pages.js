
const savedPagesNode = document.getElementById('savedPages');


const toLinkNode = function(linkText){

  var pNode = document.createElement("p");
  var linkNode = document.createElement("a");
  linkNode.textContent = linkText;
  linkNode.href = linkText;
  pNode.appendChild(linkNode);
  return pNode;
};

const toSingleNode = function(parentNode, currentNode){
  parentNode.appendChild(currentNode);
  return parentNode;
};

const displayPages = function(result) {
          var splitPages = result.pages.split(',');
          splitPages.map(toLinkNode)
                    .reduce(toSingleNode, savedPagesNode);
        };


chrome.storage.sync.get('pages', displayPages);

const clearBookmarks = function(){
  chrome.storage.sync.set({'pages':''});
  savedPagesNode.innerHTML = '';

};
document.getElementById('clear').onclick=clearBookmarks;






//view page text
function loadXMLDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerText = this.responseText;
      var responseString = this.responseText;
      /*
      var responseXML = this.responseXML;
      parse response string
      parser = new DOMParser()
      doc = parser.parseFromString(responseString, "text/html");
      console.log(doc.getElementsByTagName('body'));
      */
      console.log(responseString);
    }
  };
  xhttp.open("GET", "http://www.unicorn.com.au/", true);
  xhttp.send();
};

var searchQuery = 'unicorn';

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
  console.log(done);

  console.log(pageURL + ": result: " + result);
  return result;
};

const displayRelevantPages =  function(result) {
          var splitPages = result.pages.split(',');
          savedPagesNode.innerHTML = '';
          splitPages.filter(containsSearchQuery)
                    .map(toLinkNode)
                    .reduce(toSingleNode, savedPagesNode);
        };



const searchField = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
searchButton.onclick = function(){
  searchQuery = searchField.value;
  chrome.storage.sync.get('pages', displayRelevantPages);

};

//loadXMLDoc();
