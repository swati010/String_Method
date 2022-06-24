//OOPs----means object oriented programming langauge.
/*1---Encapsulation
2...polymorphism
3...Inheritance.
4....Abstraction  */

//object literal
let person={
    fullName:'shri pawar',
    age:20,
    adharNo:22,
    display:function(){
        console.log(this.age)
    }
}
person.display()


//object class
class Student{
constructor(studName,ag,adhNo){
this.fullName=studName
this.age=ag
this.adharNo=adhNo
}
display(){
    console.log(this.age)
}
}
let Arush=new Student("Aarush",21,32)
Arush.display()
console.log(Arush)


 //function constructor

 let Student1 = function(fn,ag,adhNo){
    this.fn = fn
    this.ag = ag
    this.adhNo = adhNo
    this.display = function(){
        console.log(this.fn)
    }

}
let Rohini = new Student("rohini",11,12)
let Amar = new Student("Amar",10,44)
console.log(Rohini)
console.log(Amar)

// Prototype 
// Every object in javascript has _proto_

console.log(Rohini._proto_ === Student1.prototype)
