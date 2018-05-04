var chai = require('chai');
var expect = chai.expect;
const func1 =  require('./lengthOfLongestSubstring.js');
const func2 = require('./addLinkedLists.js');

describe ('lengthOfLongestSubstring', function() {
  it('must return the length of the longest substring with no repeating characters', function(done) {
    expect(func1.lengthOfLongestSubstring('dvdf')).to.equal(3);
    done();
  })
})

describe ('addLinkedLists', function() {
  it('must add linked lists and return the correct sum as an array representing a linked list', function(done) {
    const l1 = {
      val: 2,
      next: {
        val: 4,
        next: {
          val: 3,
          next: null
        }
      }
    };
    const l2 = {
      val: 5,
      next: {
        val: 6,
        next: {
          val: 4,
          next: null
        }
      }
    };
    const result = func2.addLinkedLists(l1,l2);
    expect(JSON.stringify(result)).to.equal(JSON.stringify([7,0,8]));
    done();
  })
})
