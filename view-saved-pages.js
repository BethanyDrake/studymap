
const savedPagesNode = document.getElementById('savedPages');

const toLinkNode = function(linkText){
  var linkNode = document.createElement("a");
  linkNode.textContent = linkText;
  linkNode.href = linkText;
  return linkNode;
};

const toSingleNode = function(parentNode, currentNode){
  parentNode.appendChild(currentNode);
  return parentNode;
};

const displayPages = function(result) {
          var splitPages = result.pages.split(',');
          splitPages.map(toLinkNode)
                    .reduce(toSingleNode, savedPagesNode);
          // listNode.href="https://www.google.com/";
          // savedPagesNode.textContent = result.pages;
          // savedPagesNode.appendChild(listNode);
          console.log('Value currently is ' + result.pages);
          console.log(savedPagesNode);
        };


chrome.storage.sync.get('pages', displayPages);
