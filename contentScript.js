const threshold = .35;

document.arrive("ytd-comment-renderer", function() {
  var current = this;
  // This line gets the texts of each comment.
  var commentText = this.querySelector("#content-text").innerText;
  var prediction;
  chrome.runtime.sendMessage({comment: commentText}, function(response) {
    if (response.prediction > threshold) {
      current.style.display = "none";
    };
  });
})
