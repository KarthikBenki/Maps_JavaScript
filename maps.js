console.log("Lets discuss concept maps")
//Maps in java script : We can use any type of key or value
//you can use string,blank object ,function etc as a key

const myMap = new Map();
const myNewMap = new Map();
myNewMap.set(1,"karnataka")
myNewMap.set(2,"maharastra")
myNewMap.set(3,"rajastan")
myNewMap.set(4,"uttarakand")

// console.log(myNewMap)

const key1 = "blz", key2 = {}, key3 = {}, key4 = function () { };

//setting map values 
myMap.set(key1, "This is a string")
myMap.set(key2, "This is a blank object")
myMap.set(key3, "This is a blank function")
console.log(myMap)

//getting map values
let value1 = myMap.get(key1)
console.log("value1: " + value1)

//get the size of the map
console.log("the size of the map is " + myMap.size)

//you can loop using for..of to get keys and values
for (let [key, value] of myMap) {
    console.log(key, value)
}

//example for for..of loop
// let num = [1,2,3,4,5,6,7,8,9]

// for(let nums of num){
//     console.log(nums)
// }

// //get only keys 
// for(let key of myMap.keys()){
//     console.log("key is "+key)
// }

// //get only values 
// for(let value in myMap.values()){
//     // console.log("value is "+value)
//     console.log(value)
// }

// you can loop through a map using foreach loop
myMap.forEach((value, key)=>{
    let i =1;
    console.log("key is "+key)
    console.log("value is "+value)
})

//converting to an array

let myArray = Array.from(myNewMap)

console.log("myArray is ["+myArray+"]")

//converting keys to an Array
let myKeyArray = Array.from(myNewMap.keys())
console.log("myKeyArray is ["+myKeyArray+"]")

//converting keys to an Array
let myValueArray = Array.from(myNewMap.values())
console.log("myValueArray is ["+myValueArray+"]")

// console.log(myNewMap.has(5))
// // myNewMap.clear()
// console.log(myNewMap);

// console.log(myNewMap.get(4))

// converting to an array







