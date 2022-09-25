// let obj = {
//     'key1': 'value1',
//     'key2': 'value2',
//     'key3': 'value3',
//     'key4': 'value4'
// }
// // console.log(Object.values(obj));
// var arrofKey = Object.keys(obj);

// Object.keys(obj).forEach((key) => {
//     console.log(obj[key]);
// });

// let obj = {
//     num: 2,
// }

// let functionname = function (a, b, c) {
//     return this.num + a + b + c;
// }

// //call
// console.log(functionname.call(obj, 1, 2, 3));

// //apply
// console.log(functionname.apply(obj, [1, 2, 3]));

// //bind
// let bind = functionname.bind(obj)
// console.log(bind(2,2,2));

// let student = {
//     age:20
// }
// let functionname = function () {
//     return  this.age
// }
// let bind = functionname.bind(student);
// console.log(bind());

// let multiply = function (x, y) {
//     return x * y;
// }

// let multiplybyTwo = multiply.bind(this, 2);
// console.log(multiplybyTwo(3));

// let multiplybyThree = multiply.bind(this, 3);
// console.log(multiplybyThree(10));

// with closure

let multiply = function (x) {
    return function (y) {
        return (x * y);
    }
}
let multiplybyThree = multiply(3);
console.log(multiplybyThree(10));