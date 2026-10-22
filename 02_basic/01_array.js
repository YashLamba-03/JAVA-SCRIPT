// const arr1=[0,1,2,3,4,5]
// console.log(arr1)
// arr1.push(6)
// arr1.push(7)
// arr1.pop()
// console.log(arr1)

//*******************************/

const marvel_heros=['thor','ironman','spiderman']
const dc_heros=['superman','flash','batman']

// marvel_heros.push(dc_heros)//take array as data
// console.log(marvel_heros)
// console.log(marvel_heros[3][2]) 

let new_arr=marvel_heros.concat(dc_heros)
console.log(new_arr) 
const all_new_heros=[...marvel_heros,...dc_heros]
console.log(all_new_heros)