
const saveCount = document.getElementById('saveCount');
const updateSaveCount = function(result) {

          saveCount.textContent = result.numSaves;
          console.log('Value currently is ' + result.numSaves);
        };


// (
//   saveCount.textContent = items.['numSaves'];
//   console.log('called');
// );



chrome.storage.sync.get(null, updateSaveCount);
