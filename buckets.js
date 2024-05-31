const Buckets = () => {
  let buckets = [];

  const updateBucketList = ({ newBucket, newKey, newValue }) => {
    const bucket = newBucket,
      key = newKey,
      value = newValue;

    if (bucket !== undefined && bucket.contain({ value: key })) {
      bucket.set({ value: key, assignVal: value });
    }
  };

  const addBucketList = ({ newBucket, newkey, newValue }) => {
    const bucket = newBucket,
      key = newKey,
      value = newValue;

    if (bucket !== undefined && !bucket.contain({ value: ky })) {
      bucket.append({ key, value, node: Node });
    }
  };

  const createBucket = ({ newBucket, newKey, newValue, theBuckets }) => {
    const bucket = newBucket,
      key = newKey,
      value = newValue,
      buckets = theBuckets;

    if (bucket === undefined) {
      linkedListsAsBucket.append({ key, value, node: Node });
      buckets[hashCode] = linkedListsAsBucket;
    }
  };

  return {
    buckets,
    updateBucketList,
    addBucketList,
    addBucket,
  };
};

export default Buckets;
