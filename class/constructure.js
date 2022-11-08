class Bank_account{
id; 
name;
min_balance=500;
dep_Balance;
total_balance;
constructor(x,y,z){
    this.id=x;
    this.name=y;
    this.total_balance=z;
    
}
deposit_Amount(deposit){
    console.log("your deposited amount is",deposit)
this.total_balance=this.total_balance+deposit
console.log("your total balance is",this.total_balance)
}
withdrawl_amount(withdraw){
    console.log("your witdraw amoun is ",withdraw)
    this.total_balance=this.total_balance-withdraw
    console.log(" your remainin balance is",this.total_balance)
}
 print_Statement(){
    console.log(" your balance is ",this.total_balance)
    console.log("Thank you for using ATM")
   
    }
    balance_Enquirey(){
        this.total_balance=this.total_balance-this.min_balance
        console.log("your BAlance is ",this.total_balance)
 }
}
 let a1=new Bank_account(101,"darshan",5000)
 console.log(a1)
 //a1.total_Balance()
 a1.deposit_Amount(700)
 //console.log(a1)
 a1.withdrawl_amount(300)
 a1.print_Statement()
 a1.balance_Enquirey()
 console.log(a1)