let mydate=new Date()
// console.log(mydate)
// console.log(mydate.toString())
// console.log(mydate.toLocaleDateString())
// console.log(typeof mydate)

let myCreatedDate=new Date(2024,0,4)//month starts from 0
// console.log(myCreatedDate.toDateString())

let myTimeStamp=Date.now()
console.log(myTimeStamp)
console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now()/1000))
