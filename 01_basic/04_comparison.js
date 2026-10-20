// console.log("1">2)
// //*********************** 
// console.log(null>0)
// console.log(null==0)
// console.log(null>=0)

// console.log(undefined>0)
// console.log(undefined==0)
// console.log(undefined>=0)

// console.log("2"===2)//=== checks the datatype of the equation


//primitive type
let myName="yashashwee"
let anotherName=myName
anotherName="pata nhi"

console.log(myName)
console.log(anotherName)


//non-primitve type
let userone={
    email:"yash@google.com",
    pass: "1234"
}

let userTwo=userone

userTwo.pass="4567"

console.log(userone.pass)
console.log(userTwo.pass)