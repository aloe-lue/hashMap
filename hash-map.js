import linkedLists from "./linked-lists.js";
import Node from "./node.js";

const HashMap = () => {
  let buckets = [];
  let initialCapacity = 16;
  const load_factor = 0.75;

  /**
   * todo: use this function to restrict index accessing
   *
   * if (index < 0 || index >= bucket.length) {
   *   throw new Error("Trying to access index out of bound.");
   * }
   */

  const hash = (key) => {
    let hashCode = 0;
    let ky = key;

    if (ky === undefined) {
      throw new Error("Key shouldn't be left empty.");
    }

    const primeNumber = 31;

    for (let i = 0; i < ky.length; i++) {
      hashCode = (primeNumber * hashCode + ky.charCodeAt(i)) % initialCapacity;
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
      // update existing value within linked lists
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

    // handle collission using linked lists
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
        removedValue = bucket.removeAt({ index });

      return bucket.contain({ value: removedValue.ky });
    }

    buckets[hashCode] = undefined;
    return buckets[hashCode] === undefined;
  };

  const length = () => {
    let count = 0;

    buckets.forEach((bucket) => {
      // handle removed item
      if (bucket === undefined) return;


      if (bucket.contain) {
        // count the keys stored within linked lists
        count += bucket.size().count;
      }

      if (bucket.ky) {
        // count the number of keys
        count++;
      }

    });

    return count;
  };

  const keys = () => {
    let array = [];
    let index = 0;

    buckets.forEach((bucket) => {
      if (bucket === undefined) return;


      if (bucket.contain) {
        const arr = bucket.getKeys();

        for (let j = 0; j < arr.length; j++) {
          let element = arr[j];

          array[index++] = element;
        }
      }

      if (bucket.ky) {
        array[index++] = bucket.ky;
      }

    });

    return array;
  };

  const values = () => {
    let array = [];
    let index = 0;

    buckets.forEach((bucket) => {
      // handle removed bucket
      if (bucket === undefined) return;


      if (bucket.contain) {
        const arr = bucket.getValues();

        for (let j = 0; j < arr.length; j++) {
          let element = arr[j];

          array[index++] = element;
        }
      }

      if (bucket.val) {
        array[index++] = bucket.val;
      }

    });

    return array;
  };

  const entries = () => {
    let array = [];
    let index = 0;

    buckets.forEach((bucket) => {
      if (bucket === undefined) return;


      if (bucket.contain) {
        let arr = bucket.getEntries();

        for (let j = 0; j < arr.length; j++) {
          let element = arr[j];

          array[index++] = element;
        }
      }

      if (bucket.ky && bucket.val) {
        array[index++] = [bucket.ky, bucket.val];
      }

    });

    return array;
  };

  return {
    hash,
    set,
    get,
    has,
    remove,
    length,
    keys,
    values,
    entries,
  };
};

export default HashMap;
