class person{
    constructor(nam,add,mobile){
        this.name=nam;
        this.address=add;
        this.mobile=mobile;
    }
    getDetails(){
      console.log(`Name is ${this.name}. address is ${this.address}.`);
    
    }
    
}
class Emp extends person{
  
  constructor(na,ad,mo,sal,company){
    super(na,ad,mo)
    this.salary=sal;
    this.company=company;
  }

  getEmp1(){
    console.log(`Salary is ${this.salary}. Company is ${this.company}.`)
    console.log("thank you");
  }
}
person1=new person('Vishnu','HYD',23456745,'nan');// extra info ignored
employee= new Emp(232,'Rohit','Mumbai',7654334344,25000,'Apple');
// console.log(person1);
// console.log(employee);
// console.log(person1.getDetails());

// console.log(getEmp());// not accesed
console.log(employee.getDetails());
console.log(employee.getEmp1());

// follow order













