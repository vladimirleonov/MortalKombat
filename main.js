//string
const firstName = 'Monster';
console.log(firstName); //Monster
console.log(typeof firstName); //string

//number
const count = 6;
const inf = 5/0;
const not = 5 * 'sdfsdfsd';
console.log(count); //6
console.log(typeof count); //number
console.log(inf); //Infinity
console.log(typeof inf); //number
console.log(not); //NaN
console.log(typeof not); //number

//boolean
const bull = true;
console.log(bull); //true
console.log(typeof bull); //boolean

//symbol
const sym = Symbol();
console.log(sym); //Symbol()
console.log(typeof sym); //symbol

//bigint
const big = BigInt(3);
console.log(big); //3n
console.log(typeof big); //bigint

//undefined
let hei;
console.log(hei); //undefined
console.log(typeof  hei); //undefined

//null
const n = null;
console.log(n); //null
console.log(null); //null

//object
const obj = {};
const array = [];
const fun = function() {};
console.log(obj); //{}
console.log(typeof obj); //object
console.log(array); //[]
console.log(typeof array); //object
console.log(fun); //f () {}
console.log(typeof fun); //function


