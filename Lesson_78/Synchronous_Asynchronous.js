//Synchronous

// function taskOne(){
//     console.log("Task one");
// }
// function taskTwo(){
//     console.log("Task two");
// }
// function taskThree(){
//     console.log("Task three");
// }
// function taskFour(){
//     console.log("Task four");
// }
// taskOne();
// taskTwo();
// taskThree();
// taskFour();

//Asynchronous
function taskOne(){
    console.log("Task one");
}
function dataLoading(){
    console.log("Task 2.Data Loading")
}
function taskTwo(){
    setTimeout(dataLoading,3000);
}
function taskThree(){
    console.log("Task three");
}
function taskFour(){
    console.log("Task four");
}
taskOne();
taskTwo();
taskThree();
taskFour();