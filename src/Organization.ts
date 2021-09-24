import {Affairs} from './Affairs'
import {Member} from './Member';

export class Organization {

    //Fields
    private name : string;
    private affairsHosted : string[];
    private organizationMembers : string[];

    //Constructors
    constructor(name : string){
        this.name = name;
        this.affairsHosted = []; //Set to null
        this.organizationMembers = [];    //Set to null
    }

    //Getters
    getName() : string | undefined { return this.name; }
    getAffairsHostedList() : string[] { return this.affairsHosted; }
    getOrganizationMembersList() : string[] { return this.organizationMembers; }

    //Setters
    setName(name : string) { this.name = name; }
}