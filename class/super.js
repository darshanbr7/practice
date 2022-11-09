class Account{
   id;
   name;
   min_bal=500;
   loc;
   email;
   constructor(name,email,loc){
    this.name=name;
    this.email=email;
    this.loc=loc
   }
   get_Balance
}
class savings extends Account {
    constructor(id,name,email,deposit,loc){
        super(name,email,loc)
        this.id=id;
        this.deposit=deposit;
        
    }
}
 let a1= new savings(101,"darshan","darshan@gmail.com",5000,"bolare")
 console.log(a1)



