// function Mouse(){
// 	this.name = name;
// }
// Mouse.prototype.run = function(){
// 	console.log(`${this.name} is running`);
// }


class Mouse{
	contructor(name){
		this.name = name;
	}
	run(){
		console.log(`${this.name} is running`);
	}
}

const mouse = new Mouse('Mickkey');
mouse.run.call(Mouse);