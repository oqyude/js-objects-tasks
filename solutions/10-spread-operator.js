// BEGIN
const make = (name, data = {}) => ({
  name,
  state: 'moderating',
  createdAt: Date.now(),
  ...data,
});

export default make;
// END
