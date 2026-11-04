//for of

const arr=[1,2,3,4,5]
for (const num of arr) {
        // console.log(num);
}

const greetings="hello world"
for (const greet  of greetings) {
    // console.log(`each char is ${greet}`)
}

//maps //no duplicate values and order oriented

const map= new Map()
map.set('IN',"India")
map.set('USA',"United state of america")
map.set('Fr',"france")
// console.log(map)

for (const [key,values] of map) {  
        // console.log(key,'->',values)
}

// object can't be iterable for (for of) structure
// const myObject={
//     'game1':'NFS',
//     'game2':'spiderman',
// }
// for (const [key,value] of myObject) {
//         console.log(key,value)
// }

const myObject={
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift by apple"
}
for (const key in myObject) {
        // console.log(myObject[key])

    }

const programming=["js","rb","py","java","cpp"]
for (const key in programming) {
    
    console.log(programming[key])
    
}