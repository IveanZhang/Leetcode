
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