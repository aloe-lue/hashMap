const Node = ({ value, next }) => {
  let val = value === null ? null : value;
  let nxt = next === null ? null : next;

  const node = { val, nxt };

  return { node };
};

const linkedLists = () => {
  let lists = {};

  const getLists = () => lists;

  const append = ({ value, next, node }) => {
    const val = value;
    const nxt = next;
    const nd = node;

    if (Object.keys(lists).length === 0) {
      lists = nd({ value: val, next: nxt, }).node;
    } else {
      let tmp = lists;
      while (tmp.nxt !== null) {
        tmp = tmp.nxt;
      }
      tmp.nxt = nd({ value: val, next: nxt }).node;
    }

    return { val, nxt, };
  };


  return { append, getLists };
};

export { linkedLists, Node, };
