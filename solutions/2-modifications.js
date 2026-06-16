import _ from 'lodash';

// BEGIN
const capitalize = (text) => (text === '' ? '' : `${text[0].toUpperCase()}${text.slice(1)}`);

const normalize = (lesson) => {
  lesson.name = capitalize(lesson.name);
  lesson.description = lesson.description.toLowerCase();
};

export default normalize;
// END
