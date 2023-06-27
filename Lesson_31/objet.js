

function Student(name,age,cgpa,language){
    this.name = name;
    this.age = age;
    this.cgpa = cgpa;
    this.language = language;

    this.display = function dis(){
        document.write(this.name);
        document.write(this.age);
        document.write(this.cgpa);
        document.write(this.language);
    }
}

var student1 = new Student("Sohan",27,3.40,["Bangla,English"]);

student1.display()