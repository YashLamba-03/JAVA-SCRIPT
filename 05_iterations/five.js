// const programming=["js","rb","py","java","cpp"]
// //forEach does not return the value
// const values=programming.forEach((item)=>{
//     console.log(item);
//     return item;
// })
// console.log(values)


//filter returns the value
const myNums=[1,2,3,4,5,6,7,8,9,10]
// let newNums=myNums.filter((num)=> {
//     return num>4
// })

const newNums=[]
myNums.forEach((num)=>{
    if(num>4){
        newNums.push(num);
    }
})
console.log(newNums);