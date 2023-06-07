const deepCopy = require('./fn');

let obj = { name: 'Han' };
let testTarget = deepCopy(obj);
testTarget.name = '이경한';

test('test', () => {
  console.log(obj.name, testTarget.name);
  expect(obj.name).toBe(testTarget.name);
});
