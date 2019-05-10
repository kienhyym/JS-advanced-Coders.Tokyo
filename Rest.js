// function log(a,...rest) {
// console.log(a);
// console.log(rest); //trả 1 mảng các giá trị thừa ko dk hiện ra
// console.log(arguments);
// }
// log(1,2,3,4);


// function sum(...nums){
// 	return nums.reduce((a,b)=>a+b,0);
// }
// console.log(sum(1,2,3,4));


// function sum2(arr){
// 	var arr3 = Array.from(arguments);
// 	return arr3.reduce((a,b)=>a+b,0);
// }
// console.log(sum2(1,2,3,4));

function joining(separator, ...rest){
return rest.join(separator);
}
console.log(joining('.','a','b','c'));