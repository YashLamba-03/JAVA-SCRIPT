function sayMyName(){
    console.log("Y");
    console.log("a");
    console.log("s");
    console.log("h");
}
// sayMyName()

// function addNo(num1,num2){
//     console.log(num1+num2)
// }
// addNo(2,5)

// function addNo(num1,num2){
//     let result=num1+num2;
//     return result
// }
function addNo(num1,num2){
     return num1+num2
 }

const result=addNo(92384,32479)
// console.log(result)

function loginUserMessage(username){
    return `$(username) just logged in`
}
// console.log(loginUserMessage("who knows"))
// console.log(loginUserMessage())//undefined
  
// rest operator
// function calculateCartPrice(...num1){
//     return num1
// }

// console.log(calculateCartPrice(200,400,700,334443))

function calculateCartPrice(val1,val2,...num1){
    return num1
}
// console.log(calculateCartPrice(200,400,700,8934))
const user={
    username:"book",
    Price: 199
}
function handledObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handledObject(user)

handledObject({
    username:'sam',
    price:199
})