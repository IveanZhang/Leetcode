/**
* LeetCode - 557
* 557. Reverse Words in a String III
*
* Given a string, you need to reverse the order of characters
* in each word within a sentence while still preserving whitespace and initial word order.
*
*/

//method using split API
// export default (str) => {
// 	return str.split(' ').map(item => {
// 		return item.split('').reverse().join('');
// 	}).join(' ');
// }


//using regex
export default (str) => {
	//regex match
	return str.match(/[\w']+/g).map(item => {
		return item.split('').reverse().join('');
	}).join(' ');
}