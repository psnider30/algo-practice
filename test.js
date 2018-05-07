var chai = require('chai');
var expect = chai.expect;
const func1 =  require('./lengthOfLongestSubstring.js');
const func2 = require('./addLinkedLists.js');
const func3 = require('./spiralMatrix.js');

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

describe ('spiralCopy', function() {
  it('Given a 2D array (matrix) named M, print all items of M in a spiral order, clockwise.', function(done) {
    const m  =  [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20]
    ]
    const expected = '1 2 3 4 5 10 15 20 19 18 17 16 11 6 7 8 9 14 13 12'
    expect(func3.spiralCopy(m)).to.equal(expected)
    done();
  })
})
