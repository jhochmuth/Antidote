document.addEventListener("DOMContentLoaded", function() {
  const slider = document.getElementById("slider");
  const toggle = document.getElementById("toggle");

  chrome.storage.local.get(["threshold", "active"], function(result) {
    slider.value = result.threshold;
    toggle.checked = result.active;
  });

  slider.addEventListener("change", function(element) {
    chrome.storage.local.set({threshold: element.target.value});
  });

  toggle.addEventListener("change", function(element) {
    chrome.storage.local.set({active: element.target.checked});
  });
});
