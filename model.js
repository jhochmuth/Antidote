const TOXICITY_MODEL_PATH = "https://storage.googleapis.com/youtoxic-extension-models/toxicity_model/model.json";
const TOXICITY_INDEX_PATH = "https://storage.googleapis.com/youtoxic-extension-models/toxicity_model/word_index.json";
const POLITICAL_MODEL_PATH = "https://storage.googleapis.com/youtoxic-extension-models/political_model/model.json";
const POLITICAL_INDEX_PATH = "https://storage.googleapis.com/youtoxic-extension-models/political_model/word_index.json";

async function getToxicityModel() {
  const model = await tf.loadLayersModel(TOXICITY_MODEL_PATH);
  return model;
}

async function getToxicityWordIndices() {
  const wordIndices = await $.getJSON(TOXICITY_INDEX_PATH);
  return wordIndices;
}

async function getPoliticalModel() {
  const model = await tf.loadLayersModel(POLITICAL_MODEL_PATH);
  return model;
}

async function getPoliticalWordIndices() {
  const wordIndices = await $.getJSON(POLITICAL_INDEX_PATH);
  return wordIndices;
}
