class CoffeeMachine{
	makeCoffee(){
		console.log('making coffee...');
	}
}
class SpecialCoffeeMachine extends CoffeeMachine{
	makeCoffee(cb){
		console.log('making coffee and do something ...');
		cb();
	}
}
const coffeeMachine = new SpecialCoffeeMachine();
coffeeMachine.makeCoffee(function(){
	console.log('call boss');
});

// thay đổi chức năng di chuyền của thằng còn bố 
// ko trả về making coffee...
//mà trả về making coffee and do something...