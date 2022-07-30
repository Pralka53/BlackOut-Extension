var contextMenuItem={
    "id": "blackOut",
    "title": "Black Out",
    "contexts": ["all"]
};

chrome.contextMenus.create(contextMenuItem);

var check = true;

chrome.contextMenus.onClicked.addListener(function(tab, tabId, document,){
if(check == true){
    chrome.scripting.executeScript({
        target: {tabId: tabId.id},
        files: ['black-out.js']
      });
    check = false;
}
else if (check == false){
    chrome.scripting.executeScript({
        target: {tabId: tabId.id},
        files: ['white-out.js']
      });
    check = true;
}
})