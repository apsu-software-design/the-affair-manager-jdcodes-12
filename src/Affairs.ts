import {Member} from './Member';

export class Affairs{

    //Fields
    private name : string;
    private zipcode : string;
    private date : string;
    private enrolledMembers : Member[];

    //Constructors
    constructor(name : string, zipcode : string | undefined, date : string | undefined){
        this.name = name;
        this.zipcode = zipcode;
        this.date = date;
        this.enrolledMembers = []; //set to empty array
    }

    //Getters
    getName() : string | undefined { return this.name; }
    getZipcode() : string | undefined { return this.zipcode; }
    getDate() : string | undefined { return this.date;  }
    getEnrolledMembers() : Member[] { return this.enrolledMembers; }

    //Setters
    setName(name : string) { this.name = name; }
    setZipcode(zipcode : string) { this.zipcode = zipcode; }
    setDate(date : string) { this.date = date; }
}