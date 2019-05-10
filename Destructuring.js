// const arr = [10,20,30,40,50];
// const [a,b,c,d,e] = arr;
// console.log(a,d);

// const arr = [10,20,30,40,50];
// const [a,d] = arr;
// console.log(d);

// const arr = [10,20,30,40,50];
// const [a,,,d] = arr;
// console.log(d);

// const arr = [10];
// const [a,b=20] = arr;
// console.log(a,b);




const obj = {
	a:1, 
	b:2,
	c:3
};
const {a,...c} = obj;
console.log(a,c);