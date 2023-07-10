//Object Literals

function studentInfo(name,age){
    return{
        name,
        age
    }
}
console.log(studentInfo("Sohan",26));

let message = {
    body(){
        return 'Hi This is object function';
    }
}
console.log(message.body());
let message1 = {
    'body name'(){
        return 'Hi This is object function';
    }
}
console.log(message1['body name']());
