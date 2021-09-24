class Member {
    
    private name : string;
    private email : string;

    constructor(name : string, email : string){
        this.name = name;
        this.email = email;
    }

    getName() { return this.name; }
    getEmail() { return this.email; }
    
    setName(name : string) { this.name = name; }
    setEmail(email : string) { this.email = email; }


}