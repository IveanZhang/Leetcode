/**
* LeetCode - 696
* 696. Count Binary Substrings
*
* Give a string s, count the number of non-empty (contiguous) substrings that have the same number of 0's and 1's, 
  and all the 0's and all the 1's in these substrings are grouped consecutively. 
  Substrings that occur multiple times are counted the number of times they occur.

  Input: "00110011"
  Output: 6

  Input: "10101"
  Output: 4
*
*/

export default (str) => {
	let array = [];
	const match = (str) =>{
		const substr = str.match(/^(0+|1+)/)[0];
		// ^ 1  => number
		// str.repeat(number)
		const reverseSubStr = (substr[0] ^ 1).toString().repeat(substr.length);
		//RegExp 
		const regex = new RegExp(`^(${substr}${reverseSubStr})`);
		//   /^s+/.test
		if(regex.test(str)){
			//the first match
			return RegExp.$1;
		}else{
			return '';
		}
	};

	for(let i = 0; i < str.length - 1 ; i++){
		//string.slice(index)
		const substr = match(str.slice(i));
		if(substr)
		{
			array.push(substr);
		}
	}
	return array;
};