document.arrive("ytd-comment-renderer", function() {
  var current = this;
  var commentText = this.querySelector("#content-text").innerText;
  var prediction;
  var threshold;
  var debug = true;
  chrome.storage.local.get({threshold: .4}, function(result) {
    threshold = result.threshold;
  })

  chrome.runtime.sendMessage({comment: commentText}, function(response) {
    if (response.prediction > threshold) {
      if (debug) {
        console.log(commentText);
      }
      current.style.display = "none";
    };
  });
})
