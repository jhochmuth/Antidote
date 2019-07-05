const MODEL_PATH = "https://storage.googleapis.com/youtoxic-extension-models/tfjs_models_keras/model.json";
const INDEX_PATH = "https://storage.googleapis.com/youtoxic-extension-models/model_metadata/word_index.json";

async function getModel() {
  const model = await tf.loadLayersModel(MODEL_PATH);
  return model;
}

async function getWordIndices() {
  const wordIndices = await $.getJSON(INDEX_PATH);
  return wordIndices;
}
