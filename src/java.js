let array1 = [1,2]
let array2 = [...array1]
console.log(array1===array2)
array1.push(3)
console.log("After adding 3")
console.log(array1)
console.log(array2);