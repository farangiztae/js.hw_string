//SLICE

// function slice(str, start, end = str.length) {
// 	let result = '';
// 	for (; start < end; start++) {
// 		result += str[start];
// 	}
// 	return result;
// }

// console.log(slice(example, 1, 4)); //pen


//SUBSTRING

// function substring(str, start, end = str.length){
//     let result = '';
//     for(; start < end;start++){
//         result += str[start];
//     }
//     return result;
// }
// console.log(example.substring(4,1));


//SUBSTR

let example = 'Open Web';

function substr(str, start, end = str.length){
    let result = '';
    for(; start > end;start++){
        result += str[start];
    }
    return result;
}
console.log(example.substr(1,4));