import linkedLists from './linked-lists.js';
import Node from './node.js';

const HashSet = () => {
  let buckets = [];
  let capacity = 16;
  let loadFactor = 0.75;

  const hash = (key) => {
    let ky = key;
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < ky.length; i++) {
      hashCode = (primeNumber * hashCode + ky.charCodeAt(i)) % capacity;
    }

    return hashCode;
  };

  const restrictIndexAccess = (index) => {
    let idx = index;

    if (idx < 0 || idx >= buckets.length) {
      throw new Error('Trying to access index out of bound.');
    }
  };

  const initBucketsLength = () => {
    for (let i = 0; i < capacity; i++) {
      buckets.push(undefined);
    }

    return capacity;
  };

  const set = (key) => {
    let ky = key;
    let hashCode = hash(ky);
    let bucket = buckets[hashCode];

    // don't allow index to be access out of bound
    restrictIndexAccess(hashCode); 

    if (ky === undefined || ky === null) throw new Error('Please enter a key');

    if (length() > (loadFactor * capacity)) {
      /*
       * it's time to grow bucket 
       * */
      let array = [];

      keys().forEach((key, index) => {
        array[index] = key;
      });

      buckets = null;
      buckets = [];
      capacity *= 2;
      initBucketsLength();

      array.forEach((item) => {
        set(item);
      });
    }

    // add to my linked lists when collission happens
    const linkedListsAppend = (key) => {
      let ky = key;

      if (!bucket.contain({ value: ky })) {
        bucket.append({ key: ky, value: null, node: Node });
      }
    };

    const collissionHandler = (key) => {
      let ky = key;
      let bucketAsLinkedLists = linkedLists();
      bucketAsLinkedLists.append({ key: bucket.ky, value: null, node: Node });
      bucketAsLinkedLists.append({ key: ky, value: null, node: Node });
      buckets[hashCode] = bucketAsLinkedLists;
    };

    if (bucket !== undefined && bucket.contain) {
      return linkedListsAppend(ky);
    }
    if (bucket !== undefined && bucket.ky !== ky) {
      return collissionHandler(ky);
    }

    return (buckets[hashCode] = { ky });
  };

  const has = (key) => {
    let ky = key;

    if (ky === undefined || ky === null) return null;

    let hashCode = hash(ky),
      bucket = buckets[hashCode];

    if (bucket === undefined || bucket === null) return false;

    if (bucket !== undefined && bucket.contain) {
      return bucket.contain({ value: ky });
    }

    if (bucket.ky !== ky) return false;

    return bucket.ky !== undefined ? true : false;
  };

  const remove = (key) => {
    let ky = key;

    if (ky === null || ky === undefined) return null;

    const hashCode = hash(ky),
      bucket = buckets[hashCode];

    if (bucket === undefined || bucket === null) return false;

    if (bucket.contain) {
      const index = bucket.find({ value: ky });
      const removeKey = bucket.removeAt({ index });
      const contain = bucket.contain({ value: ky });
      return !contain;
    }

    buckets[hashCode] = undefined;
    return bucket[hashCode] === undefined;
  };

  const length = () => {
    let allBuckets = buckets;
    let count = 0;

    allBuckets.forEach((bucket) => {
      if (bucket === undefined) return;

      if (bucket.contain) {
        count += bucket.size().count;
      }

      if (bucket.ky) {
        count++
      }
    })

    return count;
  };

  const clear = () => {
    buckets = null;
    buckets = [];
    initBucketsSize();
    return true;
  };

  const keys = () => {
    let allBuckets = buckets;
    let array = [];
    let index = 0;

    allBuckets.forEach((bucket) => {
      if (bucket === undefined) return;

      if (bucket.contain) {
        let arr = bucket.getKeys();

        for (let i = 0; i < arr.length; i++) {
          let element = arr[i];

          array[index++] = element;
        }
      }

      if (bucket.ky) {
        array[index++] = bucket.ky;
      }
    });

    return array;
  };

  return {
    hash,
    restrictIndexAccess,
    initBucketsLength,
    set,
    has,
    remove,
    length,
    clear,
    keys,
  };
};

export default HashSet;
