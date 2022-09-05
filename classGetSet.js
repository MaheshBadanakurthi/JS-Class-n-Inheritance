// class Mobiles{
//     constructor(nm,mod){
//         this.name=nm;
//         this.model=mod;
//     }
// }
// let mobile1=new Mobiles('Nokia',2014);
// console.log(mobile1);

class Mobiles{
    constructor(nm,mod){
        this.name=nm;
        this.model=mod;
    }
    set priceOfMobile(price){
        if(price<=5000){
            alert('This mobile is not suitable for you.')
        }
        else{
            this.price=price;
        }
    }
    get nameOfMobile(){
        return "the name and model is"+this.name +" "+this.model;
    }
}
let mobile1=new Mobiles('Nokia',2014,400);
console.log(mobile1);
mobile1.priceOfMobile;



