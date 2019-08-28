const assert = require('assert');
const calculate = require('../service/calculate');

describe('calculate.js', () => {
  it('add test!', () => {
    assert.equal(calculate.add(1, 2), 3);
  });

  it('sub test!', () => {
    assert.equal(calculate.sub(1, 2), -1);
  });
});