//Leet Code
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

module.exports = {
  addLinkedLists: function(l1, l2) {
    const num1 = linkedListToNum(l1);
    const num2 = linkedListToNum(l2);
    const sum = num1 + num2;
    return numReversedToArray(sum);
  }
}

function linkedListToNum(ll) {
  let array = [];
  let head = ll;
  let currentVal;
  while (head) {
    currentVal= head.val;
    array.unshift(currentVal);
    head = head.next;
  }
  return parseInt(array.join(''));
}

function numReversedToArray(num) {
  return (''+num).split('').reverse().map(Number);
}
