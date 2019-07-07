const debug = true;

document.arrive("ytd-comment-renderer", function() {
  var current = this;
  var commentText = current.querySelector("#content-text").innerText;

  chrome.storage.local.get(["threshold", "active"], function(result) {
    var threshold = result.threshold;
    var active = result.active;

    if (active) {
      chrome.runtime.sendMessage({comment: commentText}, function(response) {
        if (response.prediction > threshold) {
          if (debug) {
            console.log(commentText);
          }
          current.style.display = "none";
        }
      });
    }
  });
});
