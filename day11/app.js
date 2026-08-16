//objects and classes..


const student = {
    name:"Raju",
    marks : 86,
    rollNo : 23,
    printMarks:function(){
        console.log("Marks = ",this.marks);
    },
};

const employee = {
    calcTax() {
        console.log("Tax rate is 10%");
    },
};

const karanArjun = {
    salary : 50000,
};

karanArjun.__proto__ = employee; 
 

console.log(karanArjun.calcTax());

console.log(`=====>  Ending of prototype creation and assigning  <======`);

// Classes 

class Car{

    constructor(brand){
        console.log(`Creating new object`);
        this.brand = brand;
    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
    // setbrand(brand){
    //     this.brand = brand;
    // }
}

let bmw = new Car("BMW");
// bmw.setbrand=("BMW");
console.log(bmw);
console.log(bmw.start());

console.log(`=====>  Ending of class creation & constructor <======`);


console.log(`=====>  Starting of the Inheritance(extends) <======`);


class Parent {
    hello(){
        console.log(`hello`);   
    }
}

class Child extends Parent{

}   

let obj = new Child();
// obj.hello();

class Person {
    constructor(name){/*this will accept the name from the child constructor using super(name) and initialize the name property */
        this.species = "Homo Sapiens";
        this.name = name;
    }
    eat(){
        console.log(`eat`);
    }
    sleep(){
        console.log(`sleep`);
    }
}

class Engineer extends Person{
    constructor(branch,name){
        super(name);//to invoke the parent constructor 
        //this super(name) will send the name to the parent consructor with the help of arg's
        this.branch = branch;
    }
    programming(){
        console.log(`programming`);
    }
}

let eng = new Engineer();
eng.programming();
eng.eat();

console.log(`=====>  Ending of the Inheritance(extends) <======`);

console.log(`======>  Starting of the super keyword <====== `);

let engobj = new Engineer("CSE","Raju");
//CSE will go to the Child and Raju will go to the Parent
