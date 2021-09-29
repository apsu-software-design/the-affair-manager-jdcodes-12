import {Affairs} from './Affairs'
import {Member} from './Member';

export class Organization {

    //Fields
    private name : string;
    private affairsHosted : Affairs[];
    private organizationMembers : Member[];

    //Constructors
    constructor(name : string){
        this.name = name;
        this.affairsHosted = []; //Set to null
        this.organizationMembers = [];    //Set to null
    }

    //Getters
    getName() : string | undefined { return this.name; }
    getAffairsHostedList() : Affairs[] { return this.affairsHosted; }
    getOrganizationMembersList() : Member[] { return this.organizationMembers; }

    //Setters
    setName(name : string) { this.name = name; }
}