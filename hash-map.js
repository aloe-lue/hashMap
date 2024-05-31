const HashMap = () => {
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

  const set = ({ key, value, Node, mybuckets, hashFunc, linkedLists }) => {
    const ky = key,
      val = value,
      linkedListsAsBucket = linkedLists(),
      node = Node,
      buckets = mybuckets,
      hashF = hashFunc;

    const hashCode = hashF({ key: ky });
    const bucket = buckets.getBuckets()[hashCode];

    buckets.updateBucketList({ newBucket: bucket, newKey: ky, newValue: val });

    buckets.addBucketList({
      newBucket: bucket,
      newKey: ky,
      newValue: val,
      Node: node,
    });

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

  const get = ({ key }) => {};
  const has = ({ key }) => {};
  const remove = ({ key }) => {};
  const length = () => {};
  const keys = () => {};
  const values = () => {};
  const entries = () => {};

  return { hash, set, get, has, remove, length, keys, values, entries };
};

export default HashMap;
