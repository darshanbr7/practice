class parent{
    constructor(name,email,phno){
        this.name=name
        this.email=email
        this.phno=phno
    }
}
class child extends parent{
    
    constructor(id,name,phno,email,min_bal){
        super(name,email,phno)
        this.id=id;
        this.min_bal=min_bal

    }
}
class child1 extends  parent{
    constructor(id,name,phno,email,min_bal){
        super(name,phno,email)
        this.id=id;
        this.min_bal=min_bal;
    }
}
 let a1=new child(101,"darshan",12452,"darada@gmail",800)
 console.log(a1)
  let b=new child1(102,"darshan",12352,"darsada@gmail",5000)
  console.log(b)