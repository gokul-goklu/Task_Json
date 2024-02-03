const json1 = {
  "key-1": "value-1.1",
  "key-2": "value-1.2",
  "key-3": {
    "key-3.1": "value-1.3",
  },
};

const json2 = {
  "key-2": "value-2.2",
  "key-3": {
    "key-3.2": "value-2.4",
  },
};

const mergeJson = (jsonObj1, jsonObj2) => {
  const jsonResult = {};
  for (let data in jsonObj1) {
    if (jsonObj1.hasOwnProperty(data)) {
      jsonResult[data] = jsonObj1[data];
    }
  }

  for (let data2 in jsonObj2) {
    if (jsonObj2.hasOwnProperty(data2))
      if (
        jsonResult.hasOwnProperty(data2) &&
        typeof jsonObj2[data2] === "object" &&
        typeof jsonResult[data2] === "object"
      ) {
        jsonResult[data2] = mergeJson(jsonResult[data2], jsonObj2[data2]);
      } else jsonResult[data2] = jsonObj2[data2];
  }
  return jsonResult;
};

console.log(JSON.stringify(mergeJson(json1, json2)));
