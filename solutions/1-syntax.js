// BEGIN
import fs from 'fs';

const getJsonFileData = () => {
  const content = fs.readFileSync('./tasks/example.json', 'utf8');
  return JSON.parse(content);
};

export default getJsonFileData;
// END
