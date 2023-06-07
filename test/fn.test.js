const deepCopy = require('./fn');

let obj = { name: '이경한' };
let testTarget = deepCopy(obj);
testTarget.name = 'HAN';

test('test', () => {
  console.log(obj.name, testTarget.name);
  expect(obj.name).toBe(testTarget.name);
});
