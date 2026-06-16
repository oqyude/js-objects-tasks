// BEGIN
const is = (first, second) => {
  const firstKeys = Object.keys(first);
  const secondKeys = Object.keys(second);

  if (firstKeys.length !== secondKeys.length) {
    return false;
  }

  return firstKeys.every((key) => second[key] === first[key]);
};

export default is;
// END
