import _ from 'lodash';

// BEGIN
const countWords = (text) => {
  const result = {};
  const words = text.trim() === '' ? [] : text.toLowerCase().split(' ');

  for (const word of words) {
    result[word] = (result[word] ?? 0) + 1;
  }

  return result;
};

export default countWords;
// END
