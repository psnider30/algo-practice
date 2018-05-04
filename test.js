var chai = require('chai');
var expect = chai.expect;
var func1 =  require('./lengthOfLongestSubstring.js');

describe ('lengthOfLongestSubstring', function() {
  it('must return the length of the longest substring with no repeating characters', function(done) {
    expect(func1.lengthOfLongestSubstring('dvdf')).to.equal(3)
    done()
  })
})
