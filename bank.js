//ES6 classes
class Bank{
    constructor(aname,aNo,aBal){
        this.aname=aname
        this.aNo=aNo
        this.aBal=aBal
        this.trans=[]
    }
 deposit(amount){
     this.aBal=this.aBal+amount
     this.trans.push(amount)
     return this.aBal
 }
 withdraw(amount){
     if(amount<this.bal){
         this.abal=this.abal-amount
         this.trans.push(-amount)
         return this.aBal
     }
     else
     console.log("insufficient balance")
 }
 createUserName(){
     this.userName=this.aname.split(" ").map(function(el){
         return el[0]
     }).reduce(function(acc,el){
         return acc+el
     },"")
 }
 transaction(){
     return this.trans.slice(-5)
 }
 static transactionCount(){
     console.log(swati.trans.length)
 }
}
let swati=new Bank('swati mundphane',122,700000)
let transactions=[32323,-43434,54675,-5656,-77,4000]
for(let x=0;x<transactions.length;x++){
    if(transactions[x]<0){
        swati.withdraw(transactions[x])
    }
    else{
        swati.deposit(transactions[x])
    }
}
swati.createUserName()
console.log(`the last five transaction of usename ${swati.aname}:${swati.transaction()}`)
Bank.transactionCount()
