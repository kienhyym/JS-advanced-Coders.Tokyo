const names = ['trang','thuy','ngan'];
for(let i = 0; i<names.length;i++){
	console.log(names[i]);
}

const obj = {
	0:'Thanh',
	1:'Trang',
	2:'ngan',
	length :3
};
for(let i=0; i<obj.length;i++){
	console.log(obj[i]);
}

function sum(a,b){
	console.log(a+b);
	return a+b;
}
sum(1,2);


function sum2(){
console.log(arguments);
}
sum2(1,2,3,4,10);


function sum3(){
	let result= 0;
	for(let i =0 ; i<arguments.length;i++){
		result += arguments[i];		
	}
	console.log(result);
	return result;
}
sum3(1,2,3,4,10);

function sum4(){
		const arrayLikeObject = Array.from(arguments); //Array.from biến 1 array like object thành 1 array
		return arrayLikeObject.reduce(function(sum,num){

			 return sum+num;
		},0)
}
console.log(sum4(1,2,3,4,10));