export class Member {

    //Fields
    private name : string;
    private email : string;

    //Constructors
    constructor(name : string, email : string | undefined){
        this.name = name;
        this.email = email;
    }

    //Getters
    getName() : string | undefined { return this.name }
    getEmail() : string | undefined { return this.name }

    //Setters
    setName(name : string)   { this.name = name; }
    setEmail(email : string) { this.email = email; }

}