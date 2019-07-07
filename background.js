var model, word_indices;

chrome.runtime.onInstalled.addListener(async function() {
  chrome.storage.local.set({threshold: .4, active: true});
  model = await getModel();
  wordIndices = await getWordIndices();

  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {urlContains: "youtube.com"},
          })
        ],
        actions: [new chrome.declarativeContent.ShowPageAction()]
      }
    ]);
  });
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  var inputBuffer = tf.buffer([1, 60], "float32");
  request.comment.toLowerCase().split(" ").forEach(function(word, index) {
    wordIndex = wordIndices[word];
    inputBuffer.set(wordIndex, 0, index);
  });
  var prediction = model.predict(inputBuffer.toTensor()).arraySync()[0][0];

  sendResponse({prediction: prediction});
});
