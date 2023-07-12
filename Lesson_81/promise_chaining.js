console.log("Hi");
function taskOne(){
    return new Promise((resolve,rejected)=>{
        resolve("Task 1 is completed");
    })
}
function taskTwo(){
    return new Promise((resolve,rejected)=>{
        setTimeout(()=>{
            resolve("Task 2 is completed")
        },3000);
    })
}
function taskThree(){
    return new Promise((resolve,rejected)=>{
        resolve("Task 3 is completed");
    })
}
function taskFour(){
    return new Promise((resolve,rejected)=>{
        resolve("Task 4 is completed");
    })
}

taskOne().then((res)=>console.log(res))
.then(taskTwo)
.then((res) => console.log(res))
.then(taskThree)
.then((res)=>console.log(res))
.then(taskFour)
.then((res)=>console.log(res))
.catch((err)=>console.log(err));
console.log("bye");