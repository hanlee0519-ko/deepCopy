const deepCopy = require('./fn');

let obj = { name: 'Han', job: { name: 'Sales' } };
let testTarget = deepCopy(obj);
testTarget.job.name = 'FE';

test('test', () => {
  console.log(obj.job, testTarget.job);
  expect(obj.job).toBe(testTarget.job);
});
