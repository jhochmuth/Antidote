document.arrive("ytd-comment-renderer", function() {
  // This line gets the texts of each comment.
  console.log(this.querySelectorAll("#content-text")[0].innerText);
})
