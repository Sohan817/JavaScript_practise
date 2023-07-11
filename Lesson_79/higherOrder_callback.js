//Higher order and callback function

// let square =(x)=>{
//     console.log(`Square of ${x} : ${x*x}`);
// }
// // square(5);

// // let y = square;
// // y(6);

// let higherOrderFunction = (num,callback) =>{
//     callback(num);
// }

// higherOrderFunction(7,square);

//callback Function
let taskOne = (callback) =>{
    console.log("Task 1");
    callback();
}
let taskTwo = (callback) =>{
    setTimeout(()=>{
        console.log("Task 2.Data loading");
        callback();
    },3000);
}
let taskThree = (callback) =>{
    console.log("Task 3");
    callback();
}
let taskFour = () =>{
    console.log("Task 4");
}
taskOne(()=>{
    taskTwo(()=>{
        taskThree(()=>{
            taskFour();
        });
    });
});
