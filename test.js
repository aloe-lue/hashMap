import linkedLists from "./linked-lists.js";
import Node from "./node.js";
import HashMap from "./hash-map.js";
import Buckets from "./buckets.js";

const testVal = [
  { key: "carlos", value: "im the old value" },
  { key: "carlos", value: "im the new value" },
  { key: "carlos", value: "im the new new value" },

  { key: "selena", value: "nahh bruh" },
  { key: "jena", value: "naahh uhh" },
  { key: "jena", value: "ora ora ora" },
  { key: "selena", value: "my name is selena" },
];

const hashMap = HashMap();
const buckets = Buckets();

testVal.forEach((item) => {
  hashMap.set({
    key: item.key,
    value: item.value,
    Node,
    mybuckets: buckets,
    hashFunc: hashMap.hash,
    linkedLists,
  });

  console.log(buckets.getBuckets()[hashMap.hash({ key: item.key })].getLists());
});
