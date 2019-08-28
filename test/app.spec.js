const assert = require('assert');

describe('app.js', () => {
 it('Meu primeiro teste!', () => {
   const a = 1;
   const b = 2;
   const c = a + b;

   assert.equal(c, 3);
 });
});