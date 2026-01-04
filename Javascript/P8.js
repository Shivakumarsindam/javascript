let DATA = "secret info.";

class user{
    constructor(name,email){
        this.name = name;
        this.email = email;

    }

    viewData(){
        console.log("website data =" , DATA);

    }
}


class ADmin extends user{
    constructor(name,email){
        super(name,email);
    }
    editData (){
        DATA = "some new vaklue";
    }
}

let stu1 = new user("shiva","scioas@GMAIL.COM");
let stu2 = new user("HKEF","CJEBBIW@H, IOSAF");

let teacher = new user ("dean", ":bchbewb@nnkjen");
let admin1 = new ADmin ("admin","admin@gmail.com");