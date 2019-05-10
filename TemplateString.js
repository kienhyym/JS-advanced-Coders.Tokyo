function greeting(name){
	return 'hi, '+name+'!';
}
function greeting2(name){
	return `Hi,



	${name}! ${1+2}`;
}
var result = greeting('Minh');
console.log(result);
var result2 = greeting2('Minh');
console.log(result2);