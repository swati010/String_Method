let student={
    fullName:"rahit pawar",
    age:22,
    lang:"marathi"
}
console.log(student)
//constuctor create the new object
let person={
    constuctor(fname,age,lang){
        this.fullName=fname
        this.age=age
        this.lang=lang
    }
}
console.log(person)
let swati=new student("swati patil",28,"Hindi")
console.log(swati)