function sum(){
	const numbers = Array.from(arguments);
	return numbers.reduce((sum,num)=>sum+num,0);
}
function average() {
	const x = sum.apply(null,arguments);
	return x/arguments.length;
}
console.log(sum(1,2,3,4,5));
console.log(average(1,2,3,4,5));
// apply giống như call()
// call nhận vào vác tham số
//apply nhận vào một mảng cacs gia tri