const _ = require("lodash");
const fs = require("fs");

const fields = {
  secondLanguage: ["en", "es"],
  programmingLanguage: ["js", "ts", "c#"],
};

let graph = {};

function addAndComputeParents(person) {
  // If not exists, create node
  if (!graph[person.name]) {
    graph[person.name] = {
      characteristics: {
        secondLanguage: person.secondLanguage,
        programmingLanguage: person.programmingLanguage,
      },
      related: [],
    };
  }

  Object.keys(graph).forEach((key) => {
    // Ignore self
    if (key !== person.name) {
      // Check if has diff characteristics
      const diffCharacteristics = Object.keys(fields).reduce(
        (accumulator, currKey) => {
          accumulator.push(
            ..._.difference(
              person[currKey],
              graph[key].characteristics[currKey]
            )
          );
          return accumulator;
        },
        []
      );

      // If has dif characteristics, add to related
      if (diffCharacteristics.length) {
        graph[key].related.push(person.name);
        graph[person.name].related.push(key);
      }
    }
  });
}

{
  graph = {};
  // same people
  addAndComputeParents({
    name: "Person test 1",
    secondLanguage: ["en"],
    programmingLanguage: ["ts"],
  });

  addAndComputeParents({
    name: "Person test 2",
    secondLanguage: ["es"],
    programmingLanguage: ["ts"],
  });

  addAndComputeParents({
    name: "Person test 3",
    secondLanguage: ["es"],
    programmingLanguage: ["c#"],
  });
  console.log(graph);
}

fs.writeFileSync("./graphData.json", JSON.stringify(graph, null, 2));
