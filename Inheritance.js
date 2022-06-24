/*
//Es6 class---
class Parent {
    fullName = "shrisha shelkhe"
    age = 22
    gender = 'female'
    lang = 'English'
}
console.log(Parent) //normal class
let Amit = new Parent("Amit", 11, 'male', 'english')
console.log(Amit)  //object create
Amit.city = 'pune'
console.log(Amit)

class Student {
    constructor(fullName, age, lang, city) {
        this.fullName = fullName
        this.age = age
        this.lang = lang
        this.city = city
        // this.display=function(){
        //console.log(this.lang)
    }
    //display = function () {
        //console.log(this.city)
    }



let Vishal = new Student('vishal', 11, 'hindi', 'mumbai')
console.log(Vishal)
//Vishal.display()

Student.prototype.display=function(){
    console.log(this.city)
}
let Ravi = new Student('Ravi', 12, 'marathi', 'mumbai')
console.log(Ravi)
//Vishal.display()
console.log(Student.prototype===Vishal.__proto__)
Student.prototype.city="nagpur"
Vishal.display()
Ravi.display()

//function constuctor
let Pople=function(name,age,height,skill){
    this.name=name
    this.age=age
    this.height=height
    this.skill=skill
   // this.display=function(){
       // console.log(this.name)
       // console.log(this.skill)

    }
    Pople.prototype.display=function(){
        console.log(this.name)
        console.log(this.skill)
    }

let shri=new Pople('shri',22,4.2,'HTML')
console.log(shri)
let ram=new Pople('ram',22,4.2,'JavaScript')
console.log(ram)
ram.display()

console.log(Pople.prototype===shri.__proto__)
console.log(ram instanceof Pople)

Pople.prototype.book="Maths"
*/
console.log('--------------------Inheritance----------------')

  class Car{
      constructor(name,model){
          this.name=name
          this.model=model
      }
      startEngin(){
          console.log('start with the',+this.name)
      }
  }
console.log(Car)
let newcar=new Car()
console.log(newcar)
//Car.prototype.name="Tiago"
//Car.prototype.startEngin()=function(){
   // console.log(this.name)

class NewCar extends Car{
    constructor(name,model,speed){
        super(name,model)
        this.speed=speed

    }
}
let mycar=new NewCar('TOYATO','new',200)
console.log(mycar.name)
console.log(mycar.model)
console.log(mycar.speed)
console.log(mycar instanceof NewCar)



