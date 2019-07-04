/**
* LeetCode - 17
* 17. Letter Combinations of a Phone Number
*
* Given a string containing digits from 2-9 inclusive, 
  return all possible letter combinations that the number could represent.

  A mapping of digit to letters (just like on the telephone buttons) is given below. 
  Note that 1 does not map to any letters.

  Input: "23"
  Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

*
*/

export default (str) => {
	const map = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
	let num = str.split('');
	let code = [];
	num.forEach(item => {
		if(map[item]){
			code.push(map[item]);
		}
	});

	const combo = (arr) =>{
    	let tmp = []
	    for (let i = 0, il = arr[0].length; i < il; i++) {
	      for (let j = 0, jl = arr[1].length; j < jl; j++) {
	        tmp.push(`${arr[0][i]}${arr[1][j]}`)
	      }
	    }

	    arr.splice(0, 2, tmp)
	    if (arr.length > 1) {
	      combo(arr)
	    } else {
	      return tmp
	    }
	    return arr[0]
	}
	return combo(code);
};