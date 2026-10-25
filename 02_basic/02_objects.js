//object literals
const mySym=Symbol("key1")
const jsUser={
    name:"Yash",
    [mySym]:"myKey",
    age:20,
    location:"meerut",
    email:"yash@xyz.com",
    isLoggedIn:false,
}

// console.log(jsUser ["email"])
// console.log(typeof mySym)

// jsUser.email="yash@google.com"
// Object.freeze(jsUser)
// jsUser.email="yash@las.com"
// console.log(jsUser)

jsUser.greeting=function(){
    console.log("hello js user")
}

jsUser.greetingtwo=function(){
    console.log(`hello js user,${this.name}`)
}
// console.log(jsUser.greeting())
// console.log(jsUser.greetingtwo())


const regularUser={
    email:"xyz@google.com",
    fullname:{
        userfullname:{
            firstname:"yash",
            lastname:"lamba",
        }
    }

}
//console.log(regularUser.fullname.userfullname.firstname) 
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

const obj3=Object.assign({},obj1,obj2)
console.log(obj3)