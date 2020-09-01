var diff = require('deep-diff').diff;
var applyDiff = require('deep-diff').applyDiff;
 
var lhs = {
  name: 'my object',
  description: 'it\'s an object!',
  details: {
    it: 'has',
    an: 'array',
    with: ['a', 'few', 'elements']
  }
};
 
var rhs = {
  name: 'updated object',
  description: 'it\'s an object!',
  details: {
    it: 'has',
    an: 'array',
    with: ['a', 'few', 'more', 'elements', { than: 'before' }]
  }
};
 
var differences = applyDiff(lhs, rhs);

console.log(differences);
