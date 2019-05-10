function greeting(name){
	console.log(`Hi!${this.name}`);
}
const cat ={
	name:'tom'
};
greeting.call(cat);

// call giống như bind()
// call gọi giá trị
//bind gọi hàm