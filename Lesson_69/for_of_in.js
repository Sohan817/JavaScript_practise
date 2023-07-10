//for of wrk with array ,string,map,set
let names = ["Sohan","Suborna","Nadim"];

for(let name of names){
    console.log(name);
}
//for in work with object
let student = {
    id : 123,
    name : "Sohan",
    cgpa : 3.40
}
for(let x in student){
    // console.log(x);
    // console.log(student[x]);
    console.log(`${x}:${student[x]}`);
}