import buckets from "./buckets.js";
import linkedLists from "./linked-lists.js";
import Node from "./node.js";

const HashMap = () => {
  const hash = (key) => {
    let hashCode = 0;
    let ky = key;

    if (ky === undefined) {
      return null;
    }

    const primeNumber = 31;
    const num = 16;

    for (let i = 0; i < ky.length; i++) {
      hashCode = (primeNumber * hashCode + ky.charCodeAt(i)) % num;
    }

    return hashCode;
  };

  const set = (key, value) => {
    let ky = key,
      val = value;

    const hashCode = hash(ky);
    const bucket = buckets[hashCode];
    const bucketAsLinkedLists = linkedLists();

    if (bucket !== undefined && bucket.contain) {
      if (bucket.contain({ value: ky })) {
        bucket.set({ value: ky, assignVal: val });
        return bucket;
      }

      if (!bucket.contain({ value: ky })) {
        bucket.append({ value: val, key: ky, node: Node });
        return bucket;
      }

      return bucket;
    }

    if (bucket !== undefined && bucket.ky !== ky) {
      bucketAsLinkedLists.append({
        key: bucket.ky,
        value: bucket.val,
        node: Node,
      });
      bucketAsLinkedLists.append({ key: ky, value: val, node: Node });
      buckets[hashCode] = bucketAsLinkedLists;

      return bucketAsLinkedLists;
    }

    // handle collission
    buckets[hashCode] = { ky, val };
    return buckets;
  };

  const get = (key) => {};
  const has = (key) => {};
  const remove = (key) => {};
  const length = () => {};
  const keys = () => {};
  const values = () => {};
  const entries = () => {};

  return { hash, set, get, has, remove, length, keys, values, entries };
};

export default HashMap;
