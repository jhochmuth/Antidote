const debug = true;

document.arrive("ytd-comment-renderer", function() {
  let current = this;
  let commentText = current.querySelector("#content-text").innerText;

  chrome.storage.local.get(["threshold", "active"], function(result) {
    let threshold = 1 - result.threshold;
    let active = result.active;

    if (active) {
      chrome.runtime.sendMessage({comment: commentText}, async function(response) {
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
