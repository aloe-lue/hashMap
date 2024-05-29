import linkedlists from "./linked-lists.js";
import Node from "./node.js";
import { set, buckets, hash } from "./hash-map.js";

const testVal = [
  { key: "carlos", value: "im the old value" },
  { key: "carla", value: "im carla" },
  { key: "carlos", value: "im carlos" },
  { key: "jeffrey", value: "im jeffrey" },
  { key: "jana", value: "im jeeena" },
  { key: "alexis", value: "alexis" },
  { key: "selena", value: "seeelina" },
  { key: "jona", value: "juna" },
  { key: "jena", value: "jena" },
  { key: "jina", value: "jina" },
  { key: "jana", value: "jana" },
  { key: "naja", value: "jana" },
];

const testLoop = ({ testVals, setFunc }) => {
  let arr = testVals;
  let set = setFunc;

  arr.forEach((item) => {
    console.log(set({ key: item.key, value: item.value }));
  })
};

testLoop({ testVals: testVal, setFunc: set });
