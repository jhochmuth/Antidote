const MODEL_PATH = "https://storage.googleapis.com/youtoxic-extension-models/tfjs_models_keras/model.json";
const INDEX_PATH = "https://storage.googleapis.com/youtoxic-extension-models/model_metadata/word_index.json";

async function getModel() {
  const word_indices = await $.getJSON(INDEX_PATH);
  const model = await tf.loadLayersModel(MODEL_PATH);

  const inputBuffer = tf.buffer([1, 60], "float32");
  var test = "cats and dogs".split(" ");
  var indices = [];
  test.forEach(function(word, index) {
    word_index = word_indices[word];
    inputBuffer.set(word_index, 0, index);
  })
  var inputTensor = inputBuffer.toTensor();

  model.predict(inputTensor).print();
}

getModel();
