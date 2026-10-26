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
console.log(loginUserMessage())//undefined
 