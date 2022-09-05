// class emp{
//     constructor(id,name,sal,add){
//         this.id=id;
//         this.name=name;
//         this.sal=sal;
//         this.add=add;
//     }
//     getDetails(){
//         console.log(`His name is ${this.name}  and his address is ${this.address} and his salary is ${this.sal}`)
//         console.log("Thank you")
//     }
    
// }
//let emp1=new emp(101,"sanju",25000,"Hyd")
//let emp2=new emp(201,"shakshi",30000,'Manchiryal')
// let emp3=new emp(208,'srilekha',25000,'Nizamabad')
// let  emp4=new emp(3301,'vinuthna',35000,'Jagtial')
// let emp5=new emp(1101,'Ramya',45000,'Jagtial')
// console.log(emp2['name','add']);// Address will come only. only latest argument will execute
// console.log(emp1);//emp1 all details will come
// console.log(emp1,emp2);// emp2,emp1 all details will come
// console.log(emp2['name']);// emp2 name will come

// console.log(emp3['id'])// b4 update id
//   emp3['id']=228;// updating ID
//   console.log(emp3['id'])// after update ID
//   console.log(emp3['age']); // undefined will comw
//   emp3['age']=24; // added new  value only to this emp3.
//   console.log(emp3['age']); // 24 will come




//
class emp{
    constructor(id,name,sal,add){
        this.id=id;
        this.name=name;
        this.sal=sal;
        this.add=add;
    }
    getDetails(){
        console.log(`the name is ${this.name}  and his address is ${this.address} and his salary is ${this.sal}`)
        console.log("Thank you")
    }
    getAny(){
        console.log("not updated")
    }
    
}
let emp1=new emp(119,'nani',12000,'Jgl');
let emp2=new emp(119,'kruthi',25000,'hyd')
emp2.getDetails();
emp1.getAny();


