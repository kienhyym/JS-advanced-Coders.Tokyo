const a = [1,2,3];
const b = [0,...a,4];
const obj1 = {
	a:1,
	b:2,
	c:3
};
console.log(obj1);
// let obj2 = obj1; khi thay đổi 2 thì 1 thay đổi lên ta dùng spread kỹ thuât shallow-cloning (tự học deep -clone)
let ob2 ={
	...obj1,
	z: 100
}
console.log(ob2);