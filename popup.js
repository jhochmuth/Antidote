document.addEventListener("DOMContentLoaded", function() {
  var threshold;
  const slider = document.getElementById("slider");
  chrome.storage.local.get(["threshold"], function(result) {
    slider.value = result.threshold;
  });
  slider.addEventListener("change", function(element) {
    threshold = element.target.value;
    chrome.storage.local.set({threshold: threshold});
  });
});
