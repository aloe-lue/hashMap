const Nodes = ({ key, value, nextNodes }) => {
  let val = value ? value : null;
  let next = nextNodes ? nextNodes : null;
  let ky = key ? key : null;

  let node = { ky, val, next };

  return { node };
};

export default Nodes;

