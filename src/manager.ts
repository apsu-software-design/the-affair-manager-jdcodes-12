import {Organization} from "./Organization";
import {Affairs} from './Affairs';
import {Member} from './Member';

export class AffairManager {

    private organizationList : Organization[] = [];
    private affairsList : Affairs[] = [];
    private membersList : Member[] = [];
    
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
    addMemberToAffair(memberName : string, affairName : string){
        
        let selectedAffair : Affairs; 

        //Search for the event
        for(let i = 0; i < this.affairsList.length; i++)
        {
            if(this.affairsList[i].getName() === affairName) 
            {
                selectedAffair = this.affairsList[i];
                break;
            }
        }

        //Add new member to that roster
        selectedAffair.getEnrolledMembers().push(this.findMemberNames(memberName));
    }

    //============= Finding Methods =============//

    //Search Members list
    //--Used in UI.showSearchMembersMenu : string | undefined)
    findMemberNames(query : string): Member | undefined {
       for(let i=0; i<this.membersList.length;i++){
           if(query === this.membersList[i].getName()){
                return this.membersList[i];
           }
       }
    }

    //Search Affairs List, return the Affair Object
    //--Used in UI.showSearchAffairsMenu(em : AffairManager : string | undefined)
    findAffairNames(query : string): Affairs | undefined {
        for(let i=0; i<this.affairsList.length;i++){
            if(query === this.affairsList[i].getName()){
                 return this.affairsList[i];
            }
        }
    }

    //Search Organizations from AM list
    //--Used in UI.showSearchOrganizationMenu(em : AffairManager) : string | undefined)
    findOrganizationNames(query : string): Organization | undefined {
        for(let i=0; i<this.organizationList.length;i++){
            if(query === this.organizationList[i].getName()){
                 return this.organizationList[i];
            }
        }
    }


    //============= Modify Methods =============//

    //--Used in UI.showModifyAffairMenu(em : AffairManager, affairName? : string)
    modifyAffair(affairName : string, newTitle : string | undefined, newTime : string | undefined){

    }


    //============= Misc Methods ===============/


    //-- Used in UI.showAddToOrganizationMenu(em : AffairManager, organizationName? : string, affairName? : string)
    addAffairToOrganization(affairName: string, organizationName : string){

    }


    //-- Used in UI.showListAffairMambers(em : AffairManager)
    getMembers(affairName : string) : Member[] {
        return null;
    }
    

}
