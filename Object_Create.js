//Object creation 3 type
//1 function constuctor.
//2 class(using Es6) constuctor.
//3 object create constuctor.


//1 function constuctor:-
let Fruit = function (fruitname, colour, size) {
    this.fruitname = fruitname
    this.colour = colour
    this.size = size

}
console.log(Fruit)
let Banana = new Fruit("Banana", "Yellow", "small")
console.log(Banana)
let Apple = new Fruit("Apple", "Red", "big")
console.log(Apple)



//2 class(using Es6) constuctor.
class Human {
    constructor(firstName, lastName, age, gender, qualification) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.gender = gender
        this.qualification = qualification
    }
}
console.log(Human)
let Ishwari = new Human("Ishwari", "Mundphane", 12, 'Female', "MCA")
console.log(Ishwari)
let Shrisha = new Human("Shrisha", "Patil", 14, 'Female', "MBA")
console.log(Shrisha)


//3 object create constuctor.
let Hello = Object.create({})
console.log(Hello)


//----------------------------------------
//javascript---object---prototype
let Person = function (fullName, age, height, color) {
    this.fullName = fullName
    this.age = age
    this.height = height
    this.color = color
    this.display = function () {
        console.log(this.height)
    }
}
let Vihan=new Person("Vihan Mohite",20,5.4,'white')
console.log(Vihan) 
let Pari=new Person("Pari babar",21,4.4,'white')
console.log(Pari)

 //creating---object--add function each object----remove object---prototype
 Person.prototype.display=function(){
     console.log(this.height)
 }
 Vihan.display()
 Pari.display()

 Pari.city='shripur'
console.log(Pari)   //only pari object add 
if(Pari instanceof Person){
    Pari.fullName="Swati Mundphane"
    Pari.age=29
}
console.log(Pari)


//object create----create new object() property
let People={
    greet(){
    console.log('oops Concept')
},
init(firstName,age,place){
this.firstName=firstName
this.age=age
this.place=place
}
}
console.log(People)
People.greet()

//let appl=Object.create(People)
//console.log(appl) //{}-create

 People.init("Anjali",21,'Akluj')
console.log(People)

//Object create ---create the obj
let obj={
    display(){
        console.log('OOPs Concept')
    }
}
let appll=Object.create(obj)
console.log(appll)
appll.age=2
console.log(appll)
appll.lang="English"
console.log(appll)

//Inheritance----Defined Proerty & method in parent class & it use child class.
//inherit----extends keyword use.
class Human1{
    fullName="Ganesh Pawar"
    age=23
    gender='Male'
    qualification="MBBS"
}

let Arti=new Human1('Rohit Mane',22,'Female','MSC')
console.log(Arti)
console.log(Human1)
class People1 extends Human1{
    amount=20000
}
let Arjit=new People1()
console.log(Arjit.amount)
console.log(Arjit.fullName) //accept parent class all properties in child class.
console.log(Arjit.age)      
console.log(Arjit.gender)
console.log(Arjit.qualification)

