class Student {
    constructor(firstname, rollno, age) {
        this.firstname = firstname
        this.rollno = rollno
        this.age = age
    }
    display() {
        console.log(this.name)
    }
}
class Teacher extends Student {
    constructor(firstname, rollno, age, salary) {
        super(firstname, rollno, age)
        this.salary = salary
    }
    display() {
        console.log(`Miss ${this.firstname}`)
        supur.display()
    }
}
class Professor extends Teacher {
    constructor(firstname, rollno, age, salary, spciliz) {
        super(firstname, rollno, age, salary)
        this.spciliz = spciliz
    }
    display() {
        console.log(`the spciliz is ${this.spciliz}`)
        super.display()
    }
}
let Professor1 = new Professor('swati', 2, 29, 30000, 'physics')
console.log(Professor1)

//Polymorphisum----
//same class same method name different signature---overloading
//diffrent class same method name same signature---overiding
class Add {
    addition(x, y) {
        console.log(x + y)
    }
    addition(x, y, z) {
        if (x != undefined && y != undefined && z != undefined) {
            crossOriginIsolated.log(x + y + z)
        }
        else if (x != undefined && y != undefined) {
            console.log(x + y)
        }

        else {
            console.log('incorrect output')
        }
    }
}
let add=new Add(12,12,12)
add.addition()
let add1=new Add(12)
add1.addition()
           
