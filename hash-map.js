import linkedLists from "./linked-lists.js";
import Node from "./node.js";
import Bucket from "./buckets.js";

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

  const set = ({ key, value, Node }) => {
    const ky = key,
      val = value,
      linkedListsAsBucket = linkedLists(),
      node = Node;
  };

  const get = ({ key }) => {};
  const has = ({ key }) => {};
  const remove = ({ key }) => {};
  const length = () => {};
  const keys = () => {};
  const values = () => {};
  const entries = () => {};

  return { set, get, has, remove, length, keys, values, entries };
};

export default HashMap;
