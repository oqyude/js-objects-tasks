// BEGIN
const get = (data, keys) => {
  let current = data;

  for (const key of keys) {
    if (current === null || typeof current !== 'object' || !Object.hasOwn(current, key)) {
      return null;
    }

    current = current[key];
  }

  return current;
};

export default get;
// END
