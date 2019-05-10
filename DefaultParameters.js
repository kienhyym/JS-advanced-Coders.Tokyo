function greeting(name){
	if(name === undefined){
		name ='friend';
	}
		return `Hi,${name}!`;

}
console.log(greeting());


function greeting2(name = 'friend'){
		return `Hi,${name}!`;

}
console.log(greeting2());