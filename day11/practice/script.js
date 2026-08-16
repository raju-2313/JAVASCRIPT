let DATA = "secret information";
//q1
//q2


class User{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log(`Name is ${this.name} and email is ${this.email}`);
    };
};

class Admin extends User{
    constructor(name,email){
        super(name,email);
    }
    setPass(pass){
        this.pass = pass;
    }
    getPass(){
        console.log(`Password is ${this.pass}`);

    }
    editData(){
        DATA = "new data";
    }
    
};


let user1 = new User("Raju","kumbharraju784@gmail.com");
let user2 = new User("Ram","ram@gmail.com");

let Admin1 = new Admin("Admin","admin@gmail.com");
Admin1.viewData();
Admin1.setPass("123456");
Admin1.getPass();
Admin1.editData();


console.log(`======> END OF THE ADMIN CLASS <======`);