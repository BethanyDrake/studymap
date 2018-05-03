
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
