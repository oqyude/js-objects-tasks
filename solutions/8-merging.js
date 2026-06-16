// BEGIN
const fill = (target, keys, source) => {
  const keysToFill = keys.length === 0 ? Object.keys(source) : keys;

  for (const key of keysToFill) {
    if (Object.hasOwn(source, key)) {
      target[key] = source[key];
    }
  }
};

export default fill;
// END
