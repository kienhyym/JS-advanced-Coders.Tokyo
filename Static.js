class Foo{
	static someMethod(){
		console.log('some method');
	}
	static anotherMethod(){
		console.log('another Method');
	}
}
Foo.someMethod();

var foo = new Foo();
foo.anotherMethod();