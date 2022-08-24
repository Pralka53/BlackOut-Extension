var contextMenuItem={
    "id": "blackOut",
    "title": "Black Out",
    "contexts": ["all"],
};

chrome.contextMenus.create(contextMenuItem);

var check = true;

chrome.contextMenus.onClicked.addListener(function(tab, tabId){
if(check == true){
    chrome.scripting.executeScript({
        target: {tabId: tabId.id},
        files: ['js/black-out.js']
      });
    check = false;
  }
else if (check == false){
    chrome.scripting.executeScript({
        target: {tabId: tabId.id},
        files: ['js/white-out.js']
      });
    check = true;
  }
})