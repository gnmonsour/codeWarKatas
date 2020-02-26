/*
the goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/

function arrayDiff(a, b) {
 const re = new RegExp(b.join(''), 'g');
 let candidate = a.join('').replace(re, '');
  return candidate.split('') ;
  
}
arrayDiff([1,2,2,2,3], [2]);

    arrayDiff([], [4,5])
    arrayDiff([3,4], [3]) 
    arrayDiff([1,8,2], []) 
// console.log(arrayDiff([1,2,2,2,3],[2]) == [1,3]);

/*
Test.describe("Sample tests", function() {
  Test.it("Should pass Sample tests", function() {
    Test.assertDeepEquals(arrayDiff([], [4,5]), [], "a was [], b was [4,5]");
    Test.assertDeepEquals(arrayDiff([3,4], [3]), [4], "a was [3,4], b was [3]");
    Test.assertDeepEquals(arrayDiff([1,8,2], []), [1,8,2], "a was [1,8,2], b was []");
  });
}); 
*/