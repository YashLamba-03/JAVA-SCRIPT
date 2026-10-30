const user={
    username:"Yash",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username} welcome to website`),
        console.log(this);
    }

}
// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()
// console.log(this)

// function something(){
//     let username="Yash"
//     console.log(this.username)
// }

// something() answer :undefined

// const something=() => {
//     let username="Yash";
//     console.log(this)
// }
// something()

// const addTwo=(num1,num2) => {
//     return num1+num2
// }
// console.log(addTwo(78,98))

const addTwo=(num1,num2) =>  num1+num2

console.log(addTwo(78,98))