import {Organization} from "./Organization";
import {Affairs} from './Affairs';
import {Member} from './Member';
import { Console } from "console";

export class AffairManager {

    private organizationList : Organization[];
    private affairsList : Affairs[];
    private membersList : Member[];
    
    constructor(){
        this.organizationList = [];
        this.affairsList = [];
        this.membersList = [];
    }

    /**
     * Option 1 - Add member to AffairManager's membersList : Array<Member>
     */
    addMember(memberName : string, memberEmail : string | undefined) { 
        for(let i=0; i<this.membersList.length;i++){
            if(memberName.toLowerCase() === this.membersList[i].getName().toLowerCase()){
                return this.membersList[i].getName();
            }
        }

        this.membersList.push(new Member(memberName, memberEmail));
   }

    /**
     * Option 2 - Add affair to AffairManager's affairsList : Array<Affairs>
     */
    addAffair(affairName : string, zipcode : string, date : string){
        for(let i=0; i<this.affairsList.length;i++){
            if(affairName.toLowerCase() === this.affairsList[i].getName().toLowerCase()){
                return this.affairsList[i].getName();
            }
        }

        this.affairsList.push(new Affairs(affairName, zipcode, date));
    }

    /**
     * Option 3 - Add organization to AffairManager's organizationList : Array<Organization>
     */
    addOrganization(organizationName : string){
        for(let i=0; i<this.organizationList.length; i++){
            if(organizationName.toLowerCase() === this.organizationList[i].getName().toLowerCase()){
                return this.organizationList[i].getName();
            }
        }

        this.organizationList.push(new Organization(organizationName));
    }


    /**
     * Option 4 -- Add an existing member to an affair
     * @param memberName - a mamber's name
     * @param affairName - an event's name
     */

    addMemberToAffair(memberName : string, affairName : string | undefined){
        
        let selectedAffair : Affairs; 
        let selectedMember : Member;
        
        for(let i = 0; i < this.affairsList.length; i++)
        {
            if(this.affairsList[i].getName().toLowerCase() === affairName.toLowerCase()) 
            {
                selectedAffair = this.affairsList[i];
                break;
            }
        }

        for(let i=0; i < this.membersList.length; i++)
        {
            if(this.membersList[i].getName().toLowerCase() === memberName.toLowerCase()){
                selectedMember = this.membersList[i];
                break;
            }
        }
    
        if(selectedAffair.getEnrolledMembers().indexOf(selectedMember, 0) === -1){
            selectedAffair.getEnrolledMembers().push(selectedMember);
        }
        else {
            console.log("\nMember already is registered for " + selectedAffair.getName());
        }
    }

    /**
     * 
     * @returns an array of strings : member names
     */
    findMemberNames(): string[] | undefined {
        return this.filterListForNames(this.membersList); //Extract names from list, store in fitlered list
    }

    //Search Affairs List, return the Affair Object
    //--Used in UI.showSearchAffairsMenu(em : AffairManager : string | undefined)
    findAffairNames(): string[] | undefined {
        return this.filterListForNames(this.affairsList);
    }

    //Search Organizations from AM list
    //--Used in UI.showSearchOrganizationMenu(em : AffairManager) : string | undefined)
    findOrganizationNames(): string[] | undefined {
        return this.filterListForNames(this.organizationList);
    }


    //============= Modify Methods =============//

    //--Used in UI.showModifyAffairMenu(em : AffairManager, affairName? : string)
    modifyAffair(affairName : string, newName : string = undefined, newTime : string = undefined){
        let selectedAffair : Affairs;

        for(let i=0; i<this.affairsList.length; i++){
            if(affairName.toLowerCase() === this.affairsList[i].getName().toLowerCase()){
                selectedAffair = this.affairsList[i];
            }
        }

        //Edit Title
        if(newName !== undefined){
            selectedAffair.setName(newName);
        }

        if(newTime !== undefined){
            selectedAffair.setDate(newTime);    
        }
    }


    addAffairToOrganization(affairName: string, organizationName : string){
        let selectedOrganization : Organization;
        let selectedAffair : Affairs;

        for(let i=0; i<this.organizationList.length; i++){
            if(organizationName.toLowerCase() === this.organizationList[i].getName().toLowerCase()){
                selectedOrganization = this.organizationList[i];
            }
        }

        for(let i=0; i<this.affairsList.length; i++){
            if(affairName.toLowerCase() === this.affairsList[i].getName().toLowerCase()){
                selectedAffair = this.affairsList[i];
            }
        }
        
        if(selectedOrganization.getAffairsHostedList().indexOf(selectedAffair, 0) === -1){
            selectedOrganization.getAffairsHostedList().push(selectedAffair);
        }
        else {
            console.log("\nAffair already is registered as an event for " + selectedOrganization.getName());
        }
    }

    /**
     * Helper function to filter lists from Organization & Affair objects
     */
    filterListForNames(list : any[]) : string[] {
        let extractedNames : string[] = [];

        for(let i=0; i < list.length; i++) {
            extractedNames[i] = list[i].getName();
        }

        return extractedNames;
    }

    getMembers(affairName : string) : Member[] {
        
        for(let i=0; i<this.affairsList.length; i++){
            if(affairName.toLowerCase() === this.affairsList[i].getName().toLowerCase()){
                return this.affairsList[i].getEnrolledMembers();
            }
        }
    }

    /**
     * Doesn't work
     * @param organizationName 
     * @returns 
     */
    getAffairs(organizationName : string) : Affairs[] {
        for(let i=0; i<this.organizationList.length; i++){
            if(organizationName.toLowerCase() === this.organizationList[i].getName().toLowerCase()){
                return this.organizationList[i].getAffairsHostedList();
            }
        }
    }

    displayRegisteredMembers() {
        console.log("\n-----Registered Members-----");
        for(let i=0; i<this.membersList.length; i++){
            console.log("~~~ Member #" + (i+1) + " ~~~\n")
            console.log("Name: " + this.membersList[i].getName());
            console.log("Email: " + this.membersList[i].getEmail() + "\n");
        }
    }

    displayRegisteredAffairs(){
        console.log("\n-----Registered Affairs-----");
        for(let i=0; i<this.affairsList.length; i++){
            console.log("~~~ Affair #" + (i+1) + " ~~~:\n")
            console.log("Name: " + this.affairsList[i].getName());
            console.log("Zipcode: " + this.affairsList[i].getZipcode());
            console.log("Date: " + this.affairsList[i].getDate() + "\n");
        }
    }

    displayRegisteredOrganizations(){
        console.log("\n-----Registered Organizations -----");
        for(let i=0; i<this.organizationList.length; i++){ 
            console.log("~~~ Organization #" + (i+1) + " ~~~\n")
            console.log("Name: " + this.organizationList[i].getName()+"\n");
        }
    }
}
