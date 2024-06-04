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
    /**
     * @info
     * handle collisions and update values within linked lists
     *   you want to use bucket.contain because using this method returns
     *   undefined on using it when bucket is an object type.
     */
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

    // when key generates the same hashCode but difference key
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

    return (buckets[hashCode] = { ky, val });
  };

  const get = (key) => {
    const ky = key;

    const hashCode = hash(ky),
      bucket = buckets[hashCode];

    if (bucket === null || bucket === undefined) return null;

    if (bucket.contain) {
      const index = bucket.find({ value: ky }),
        value = bucket.at({ index });

      return value === null ? null : value.val;
    }

    return bucket.val;
  };

  const has = (key) => {
    const ky = key;

    if (!ky) return false;

    const hashCode = hash(ky),
      bucket = buckets[hashCode];

    if (bucket === undefined || bucket === null) return false;

    if (bucket.contain) {
      const index = bucket.find({ value: ky }),
        value = bucket.at({ index });

      return value !== null;
    }

    return bucket.ky !== null;
  };

  const remove = (key) => {
    const ky = key;

    if (!ky) return null;

    const hashCode = hash(ky),
      bucket = buckets[hashCode];

    if (bucket === undefined || bucket === null) return null;

    if (bucket.contain) {
      const index = bucket.find({ value: ky }),
        value = bucket.removeAt({ index });

      return !bucket.contain({ value: value.key })
    }

    buckets[hashCode] = undefined;
    return bucket === undefined;
  };

  const length = () => {

  };
  const keys = () => {};
  const values = () => {};
  const entries = () => {};

  return { hash, set, get, has, remove, length, keys, values, entries };
};

export default HashMap;
