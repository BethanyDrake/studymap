
const saveCount = document.getElementById('saveCount');
const displayPages = function(result) {

          saveCount.textContent = result.pages;
          console.log('Value currently is ' + result.pages);
        };


// (
//   saveCount.textContent = items.['numSaves'];
//   console.log('called');
// );



chrome.storage.sync.get('pages', displayPages);
