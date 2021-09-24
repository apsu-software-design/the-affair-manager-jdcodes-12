class Affair {

    private name : string;
    private zipcode : string;
    private date : string;

    constructor(name : string, zipcode : string, date : string){
        this.name = name;
        this.zipcode = zipcode;
        this.date = date;
    }

    getName() { return this.name; }
    getZipCode() { return this.zipcode; }
    getDate() { return this.date; }

    setName(name : string) { this.name = name; }
    setZipCode(zipcode : string) { this.zipcode = zipcode; }
    setDate(date : string) { this.date = date; }
    
    
}