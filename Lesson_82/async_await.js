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

async function callAllTasks(){
    try{
    const t1 = await taskOne();
    console.log(t1);
    const t2 = await taskTwo();
    console.log(t2);
    const t3 = await taskThree();
    console.log(t3);
    const t4 = await taskFour();
    console.log(t4);
    }catch(error){
        console.log(error);
    }
}
callAllTasks();
console.log("Bye");