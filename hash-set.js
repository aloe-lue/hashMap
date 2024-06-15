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
      hashCode = (primeNumber * hashCode + hashCode.charCodeAt(i)) % capacity;
    };

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
    };

    return capacity;
  }; 

  const set = (key) => {
    let ky = key;
    let hashCode = hash(ky);
    let bucket = buckets[hashCode];

    /*
    if (length() >= (loadFactor * capacity)) {

    }
    */

    // add to my linked lists when collission happens
    const linkedListsAppend = (key) => {
      let ky = key;
      if (!bucket.contain({ value: ky })) {
        bucket.append({ key: ky, node: Node, })
      }
    };

    const collissionHandler = () => {
      // handle collission using the linked lists
      bucket.append({ key: bucket.ky, node: Node, });
      bucket.append({ key: ky, node: Node, });
      buckets[hashCode] = bucket;
    };

    return (buckets[hashCode] = { ky });
  };

  return {
    hash,
    restrictIndexAccess,
    initBucketsLength,
    set,
  };
};

export default HashSet;
