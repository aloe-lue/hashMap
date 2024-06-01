const HashMap = () => {
  const hash = ({ key }) => {
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

  const set = ({ key, value, }, { Node, mybuckets, hashFunc, linkedLists }) => {
    const ky = key,
      val = value,
      linkedListsAsBucket = linkedLists(),
      node = Node,
      buckets = mybuckets,
      hashF = hashFunc;

    // reuse code when creating a bucket
    const hashCode = hashF({ key: ky });
    const bucket = buckets.getBuckets()[hashCode];

    buckets.updateBucketList({ newBucket: bucket, newKey: ky, newValue: val });

    // handle collision
    buckets.addBucketList({
      newBucket: bucket,
      newKey: ky,
      newValue: val,
      Node: node,
    });

    // create bucket
    buckets.createBucket({
      newBucket: bucket,
      newKey: ky,
      newValue: val,
      theBuckets: buckets.getBuckets(),
      newHashCode: hashCode,
      Node: node,
      linkedLists,
    });

    return buckets.getBuckets();
  };

  const get = ({ newKey }, { newBuckets, hashFunc, }) => {
    const key = newKey,
      buckets = newBuckets,
      hashF = hashFunc;

    const hashCode = hashF({ key }),
      bucket = buckets.getBuckets()[hashCode];

    if (bucket === undefined) {
      return null;
    };

    const index = bucket.find({ value: key }),
      value = bucket.at({ index });

    return value === null ? null : value.val;
  };

  const has = ({ newKey }, { newBuckets, hashFunc }) => {
    const key = newKey,
      buckets = newBuckets,
      hashF = hashFunc;

    const hashCode = hashF({ key }),
      bucket = buckets.getBuckets()[hashCode];

    if (bucket === undefined) {
      return false;
    }

    const index = bucket.find({ value: key });
    const list = bucket.at({ index });

    return list !== null;
  };

  const remove = ({ newKey }, { newBuckets, hashFunc }) => {
    const key = newKey,
      buckets = newBuckets,
      hashF = hashFunc;

    const hashCode = hashF({ key }),
      bucket = buckets.getBuckets()[hashCode];

    if (bucket === undefined) {
      return false;
    }

    const index = bucket.find({ value: key }),
      list = bucket.removeAt({ index });

    return list === null;
  };

  const length = () => {};
  const keys = () => {};
  const values = () => {};
  const entries = () => {};

  return { hash, set, get, has, remove, length, keys, values, entries };
};

export default HashMap;
