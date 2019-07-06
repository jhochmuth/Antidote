var model, word_indices;

chrome.runtime.onInstalled.addListener(async function() {
  model = await getModel();
  wordIndices = await getWordIndices();
  chrome.storage.local.set({threshold: .4});
})

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  var inputBuffer = tf.buffer([1, 60], "float32");
  request.comment.toLowerCase().split(" ").forEach(function(word, index) {
    wordIndex = wordIndices[word];
    inputBuffer.set(wordIndex, 0, index);
  })
  var prediction = model.predict(inputBuffer.toTensor());

  sendResponse({prediction: prediction.arraySync()[0][0]});
})
