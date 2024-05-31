const Buckets = () => {
  let buckets = [];

  const getBuckets = () => buckets;

  const updateBucketList = ({ newBucket, newKey, newValue }) => {
    const bucket = newBucket,
      key = newKey,
      value = newValue;

    if (bucket !== undefined && bucket.contain({ value: key })) {
      bucket.set({ value: key, assignVal: value });
    }
  };

  const addBucketList = ({ newBucket, newKey, newValue, Node }) => {
    const bucket = newBucket,
      key = newKey,
      value = newValue,
      node = Node;

    if (bucket !== undefined && !bucket.contain({ value: key })) {
      bucket.append({ key, value, node });
    }
  };

  const createBucket = ({ newBucket, newKey, newValue, theBuckets, Node, linkedLists, newHashCode }) => {
    const bucket = newBucket,
      key = newKey,
      value = newValue,
      buckets = theBuckets,
      node = Node,
      hashCode = newHashCode;

    if (bucket === undefined) {
      const linkedListsAsBucket = linkedLists();
      linkedListsAsBucket.append({ key, value, node });
      buckets[hashCode] = linkedListsAsBucket;
    }
  };

  return {
    getBuckets,
    updateBucketList,
    addBucketList,
    createBucket,
  };
};

export default Buckets;
