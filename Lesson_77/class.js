class Student{
    studentInfo(id,name){
        this.id = id,
        this.name = name
    }
    set studentName(name){
        this.name = name;
    }
    get studentInformation(){
        return this.id+" "+this.name;
    }
}

s1 = new Student();

s1.id = 101;
s1.name = "Sohan";

console.log(s1.id);
console.log(s1.name);
s1.studentName = "Nadim";
console.log(s1.name);
console.log(s1.studentInformation);
