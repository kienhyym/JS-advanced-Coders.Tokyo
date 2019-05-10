// var a = {
// 	name: 'AAA',
// 	run: function(){
// 		var run2 = function(){
// 			console.log(this.name);
// 		}.bind(a);
// 		//a hoặc this đều dk 
// 		// this.name = a.name
// 		run2();
// 	}
// };
// a.run();



// var a = {
// 	name: 'AAA',
// 	run: function(){
// 		var run2 = ()=>{
// 			console.log(this.name);
// 		};
// 		//a hoặc this đều dk 
// 		// this.name = a.name
// 		run2();
// 	}
// };
// a.run();


// var a = {
// 	name: 'AAA',
// 	run: function(){
// 		var run2 = ()=>{
// 			console.log(this.name);
// 		};
// 		//a hoặc this đều dk 
// 		// this.name = a.name
// 		run2.bind(a)();
// 	}
// };
// a.run();

var a = {
	name: 'AAA',
	run: function(){
		var that = this;
		var run2 = ()=>{
			console.log(that.name);
		};
		//a hoặc this đều dk 
		// this.name = a.name
		run2();
	}
};
a.run();