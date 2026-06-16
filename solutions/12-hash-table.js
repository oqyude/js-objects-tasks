import crc32 from 'crc-32';

// BEGIN
const getIndex = (key, size) => Math.abs(crc32.str(key)) % size;

export const make = (size = 1000) => new Array(size);

export const set = (map, key, value) => {
  const index = getIndex(key, map.length);
  const current = map[index];

  if (current !== undefined && current[0] !== key) {
    return false;
  }

  map[index] = [key, value];
  return true;
};

export const get = (map, key, defaultValue = null) => {
  const index = getIndex(key, map.length);
  const current = map[index];

  if (current === undefined || current[0] !== key) {
    return defaultValue;
  }

  return current[1];
};
// END
