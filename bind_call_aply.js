 // how to set this key manually 
        // bind 
        // call 
        // apply
 let person = {
            fullName:"chinmay deshpande",
             age:23,
            display:function(){
                console.log(this.fullName)
             }
         }
        
         person.display()
        
         let person2 = {
            fullName:"soni kale",
            age:24
     }
        
         person2.display = function(){
            console.log(this.fullName)
         }
        
         person2.display()// ---  bind 
         let chinmay = {
            fullName:"sanam",
            rollNumber:23,
             display:function(){
                 console.log(this.fullName)
             }
        
         }
        
         let amol = {
             fullName:"amol",
              rollNumber:24
        
        }
        
         let display2 = function(){
             console.log(this.fullName)
         }
         let aaa = display2.bind(amol)
         aaa()
        
          display2.bind(amol)()
         let add = function(){
             console.log(9+8)
         }
        
        
         function addition(fn){
        
             return fn 
        
         }
        
         addition(add)()
        
        let personOne = {
            fullName:"Soniya deshpande",
            age:12  
        }
        
        let personTwo = {
            fullName:"karan jadhav",
            age:22
        }
        let personThree = {
            fullName:"swati bhange",
            age:23
        }
        
        
        let display = function(){
            console.log(this.fullName)
        }
         display.bind(personOne)()
        
        display.call(personOne)
        display.call(personTwo)
        display.call(personThree)
        
        let amol2 = {
            info:"amol rao",
            phone:"770919441"
        }
        
        let displayThree = function(lastName){
            console.log(this.info , lastName)
        }
        
        displayThree.call(amol2,"rao")
        
        // apply  
        displayThree.apply(amol2,["rao"]) 
        class Bank {
            constructor(fn){
                this.firstName = fn 
            }
        
            static displayName(){
                console.log(this.firstName)
            }
        }
        let sbi = new Bank("SBI")
        Bank.displayName.bind(sbi)()
        Bank.displayName.call(sbi)
        Bank.displayName.apply(sbi)
        
        
        
        
        
        
        

       