/*
class Animal{
	contructor(name){
		this.name = name;
	}
	run(){
		console.log('Eating....');
	}
}

class Bird extends Animal{
	fly(){
		console.log('flying');
	}
}
const bird = new Bird('Thông');
bird.fly();


class Parrot extends  Bird{
	Speak(){
		console.log('Speaking ...');
	}
} 
const parrot = new Parrot('Thinh');
parrot.Speak();*/

function Animal(name){
	this.name = name;
}
Animal.prototype.eat = function(){
	console.log('Eating...');
} 
function Bird(name){
	Animal.apply(this, arguments);

}
Bird.prototype.fly = function(){
	console.log('flying...');
}
Bird.prototype = new Animal();
var bird  = new Bird('aaa');
bird.fly;

