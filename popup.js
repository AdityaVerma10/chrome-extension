document.addEventListener('DOMContentLoaded', function() {
    let getTitleButton = document.getElementById('getTitleButton');
    let titleDisplay = document.getElementById('title');
  
    getTitleButton.addEventListener('click', function() {
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        let activeTab = tabs[0];
        console.log(tabs[0])
        let title = activeTab.title;
        titleDisplay.innerText = `Title :- ${title}`;
      });
    });
  });
  