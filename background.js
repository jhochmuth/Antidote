chrome.webRequest.onCompleted.addListener(function() {
  chrome.tabs.executeScript(details={file: "contentScript.js"});
});
