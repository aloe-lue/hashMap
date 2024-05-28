import { linkedLists, Node } from "./linked-lists.js";

const hash = ({ key }) => {
  let hashCode = 0;
  let ky = key;

  const primeNumber = 31;
  const num = 16;

  for (let i = 0; i < ky.length; i++) {
    hashCode = (primeNumber * hashCode + ky.charCodeAt(i)) % num;
  }

  return hashCode;
};

let buckets = [];

const set = ({ key, value }) => {
  const ky = key;
  const val = value;

  // use bucket to create bucket in an array as a linked lists
  const bucket = linkedLists();
  let hashCode = hash({ key: ky });

  if (buckets[hashCode] === undefined) {
    // dont create a bucket instead use existing bucket add to last lists
    bucket.append({
      value: { ky, val },
      next: null,
      node: Node,
    });
    // asign bucket a new linked lists
    buckets[hashCode] = bucket;
  }
  if (buckets[hashCode] !== undefined) {
    buckets[hashCode].append({ value: { ky, val }, next: null, node: Node });
  }

  return { ky, val };
};

export { set, hash, buckets };
