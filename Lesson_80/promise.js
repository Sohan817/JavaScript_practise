console.log("Welcome");


//promise -> pending,resolve,rejected

//creating promise 
// const promise1 = new Promise((resolve,rejected)=>{
//     let completePromise = true;
//     if(completePromise){
//         resolve("Complete promise 1");
//     }else{
//         rejected( new Error("Rejected promise 1"));
//     }
// });
// const promise2 = new Promise((resolve,rejected)=>{
//     resolve("Completed promise 2");
// })
const promise1 = new Promise((resolve,rejected)=>{
      setTimeout(()=>{
        resolve("Complete promise 1");
      },2000);
    
});
const promise2 = new Promise((resolve,rejected)=>{
      setTimeout(()=>{
        resolve("Complete promise 2");
      },3000);
})

// promise1.then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err.message);
// });
// promise2.then((res)=>{
//     console.log(res);
// })
// Promise.all([promise1,promise2]).then(([res1,res2])=>{
//     console.log(res1,res2);
// })
Promise.race([promise1,promise2]).then((res)=>{
    console.log(res);
})
console.log("Goodbye");