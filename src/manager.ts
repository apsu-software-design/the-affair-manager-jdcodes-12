import {Organization} from "./Organization";
import {Affairs} from './Affairs';
import {Member} from './Member';

export class AffairManager {

    private organizationList : Organization[];
    private affairsList : Affairs[];
    private membersList : Member[];
    
    constructor(){
        this.organizationList = [];
        this.affairsList = [];
        this.membersList = [];
    }

    //--Used in UI.showNewMemberMenu(em : AffairManager)
    addMember(memberName : string, memberEmail : string | undefined) {

        this.membersList.push(new Member(memberName, memberEmail)); 
    }

    //--Used inUI.ShowNewAffairMenu(em :AffairManager)
    addAffair(affairName : string, zipcode : string, date : string){

        this.affairsList.push(new Affairs(affairName, zipcode, date));
    }

    //--Used in UI.showNewOrganizationMenu(em : AffairManager)
    addOrganization(organizationName : string){
        
        this.organizationList.push(new Organization(organizationName));
    }


    //Add a member to an event's roster
    //--Used in UI.showAddToAffairMenu(em : AffairManager, affairName? : string)
    addMemberToAffair(memberName : string, affairName : string | undefined){
        
        let selectedAffair : Affairs; 
        
        for(let i = 0; i < this.affairsList.length; i++)
        {
            if(this.affairsList[i].getName().toLowerCase() === affairName.toLowerCase()) 
            {
                selectedAffair = this.affairsList[i];
                break;
            }
        }
    
        selectedAffair.getEnrolledMembers().push(new Member(memberName, undefined));
    }

    //============= Finding Methods =============//

    //Search Members list
    //--Used in UI.showSearchMembersMenu : string | undefined)
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
    modifyAffair(affairName : string, newTitle : string | undefined, newTime : string | undefined){

    }


    //============= Misc Methods ===============/


    //-- Used in UI.showAddToOrganizationMenu(em : AffairManager, organizationName? : string, affairName? : string)
    addAffairToOrganization(affairName: string, organizationName : string){

    }

    filterListForNames(list : any[]) : string[] {
        let extractedNames : string[] = [];
        
        for(let i=0; i < list.length; i++)
        {
            extractedNames[i] = list[i].getName();
        }
        console.log("Extracted names length: " + extractedNames.length);
        return extractedNames;
    }

    //-- Used in UI.showListAffairMambers(em : AffairManager)
    getMembers(affairName : string) : Member[] {
        let affairMemebrs : Member[];
        for(let i=0; i<this.affairsList.length; i++){
            if(affairName.toLowerCase() === this.affairsList[i].getName().toLowerCase()){
                affairMemebrs = this.affairsList[i].getEnrolledMembers();
            }
        }
        return affairMemebrs;
    }
}
