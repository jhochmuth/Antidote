const TOXICITY_MODEL_PATH = "https://onedrive.live.com/download?cid=F27A5B9996AB72E1&resid=F27A5B9996AB72E1%2128862&authkey=AKm-exF6LG7j1jQ";
const TOXICITY_INDEX_PATH = "https://onedrive.live.com/download?cid=F27A5B9996AB72E1&resid=F27A5B9996AB72E1%2128829&authkey=AI9huxn9IpUVF0Q";


async function weightUrlConverter(filename) {
  return filename;
}

async function getToxicityModel() {
  const model = await tf.loadLayersModel(TOXICITY_MODEL_PATH, {weightUrlConverter: weightUrlConverter});
  return model;
}

async function getToxicityWordIndices() {
  const wordIndices = await $.getJSON(TOXICITY_INDEX_PATH);
  return wordIndices;
}
