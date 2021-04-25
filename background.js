let toxicityModel, toxicityWordIndices;

chrome.runtime.onInstalled.addListener(async function() {
  chrome.storage.local.set({threshold: .4, active: true});

  toxicityModel = await getToxicityModel();
  toxicityWordIndices = await getToxicityWordIndices();

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
  const comment = request.comment;
  const inputBuffer = tf.buffer([1, 60], "float32");

  comment.toLowerCase().split(" ").forEach(function(word, index) {
    wordIndex = toxicityWordIndices[word];
    inputBuffer.set(wordIndex, 0, index);
  });
  let prediction = toxicityModel.predict(inputBuffer.toTensor()).arraySync()[0][0];

  sendResponse({prediction: prediction});
});
