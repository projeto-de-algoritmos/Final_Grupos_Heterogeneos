import _ from "lodash";

const fields = ["idiom", "languages"];

let graph = {};

export function addAndComputeRelated(person) {
  if (graph[person.name]) return graph;
  // If not exists, create node
  graph[person.name] = {
    characteristics: {
      idiom: person.idiom,
      languages: person.languages,
    },
    related: [],
  };

  Object.keys(graph).forEach((key) => {
    // Ignore self
    if (key !== person.name) {
      // Check if has same characteristics
      const sameCharacteristics = fields.reduce((accumulator, currKey) => {
        const currentPerson = graph[person.name].characteristics[currKey];
        const currentKey = graph[key].characteristics[currKey];

        if (!currentPerson.length || !currentKey.length) return accumulator;
        const equals = _.intersection(currentPerson, currentKey);
        return [...accumulator, ...equals];
      }, []);

      // If has same characteristics add to related
      if (sameCharacteristics.length > 1) {
        graph[key].related.push(person.name);
        graph[person.name].related.push(key);
      }
    }
  });

  return graph;
}
