function generateSampleJson(jsonStructure, numSamples) {
  const samples = [];

  for (let i = 0; i < numSamples; i++) {
    const sample = {};
    for (const field of jsonStructure) {
      const key = field.key;
      const fieldType = field.type;

      sample[key] = generateRandomValue(fieldType);
    }

    samples.push(sample);
  }

  return samples;
}

function generateRandomValue(type) {
  switch (type) {
    case "string":
      return "sample";
    case "number":
      return Math.floor(Math.random() * 100) + 1;
    case "boolean":
      return Math.random() < 0.5;
    default:
      return null;
  }
}

const jsonStructure = [
  { key: "name", type: "string" },
  { key: "age", type: "number" },
  { key: "canVote", type: "boolean" },
];

const numSamples = 2;

const generatedSamples = generateSampleJson(jsonStructure, numSamples);

console.log(JSON.stringify(generatedSamples));
