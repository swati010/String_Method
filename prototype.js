let Person={
    fullName:"Ishwari Mundphane",
    age:7,
    gender:"Female",
    qualification:"MBBA",       //literal object
    display:function(){
        console.log(this.gender)
    }
}
console.log(Person) //all object print  
Person.display( ) //function gender value only.

let Person1=function(fn,ag,gen,qua){
    this.fullName=fn
    this.age=ag
    this.gender=gen
    this.qualification=qua
    this.display=function(){
        console.log(this.qualification)
       }
    }
       Person1.prototype.display=function(){
        console.log(this.qua)  
       
    }

let Ganesh=new Person1("Ganesh",12,'male','mca')
console.log(Ganesh)
let swati=new Person1("swati",28,"female","bca")
console.log(swati)
Ganesh.display() 
swati.display()


console.log(Ganesh instanceof Person1) //instanceof-----return boolean value
//mhje ganesh cha parent person1 asel tr true.
console.log(swati instanceof Person1)

console.log(Person1.prototype===Ganesh.___proto___)

Person1.prototype.language="English"
console.log(swati.language)


let person2=function(fullName,age){
    this.fullName=fullName
    this.age=age
}
let shri=new person2("shri babar",2)
console.log(shri)
if(shri instanceof person2){
    shri.fullName="pari babar"
    shri.age=9
}

console.log(Ganesh.hasOwnProperty('language'))//swatachi property asel tr return -true
console.log(Person.prototype.hasOwnProperty('langauage'))

//array
let fruit=["banana","mango","sweetlime","chery"]
console.log(fruit)
console.log(fruit instanceof Array)
console.log(fruit._proto_===Array.prototype)
fruit.push("grapes")
console.log(fruit) 

//object---_proto_--------function constroctor/class

//duplicate element remove
console.log(new Set(["banana","mango","sweetlime","chery","mango","banana"]))
console.log(Array.from(new Set(["banana","mango","sweetlime","chery","mango","banana"])))


