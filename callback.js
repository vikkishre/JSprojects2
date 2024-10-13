// function func1(callback)
// {
//     setTimeout(()=>{
//         callback()
//         console.log("Task 4");
        
//     },3000)
// }
// function func2()
// {
// console.log("Task 1");
// console.log("Task 2");
// console.log("Task 3");
// }
// func1(func2)
let numbers=[1,2,3,4,5];
let sum=numbers.reduce((acc,n)=>{
    acc+n
    return acc
})