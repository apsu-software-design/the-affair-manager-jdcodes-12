class AffairManager {

    //Fields
    private name : string;
    //Affair List
    //Members List
    //Organization List

    //====== Constructors ======//
    constructor(){

    }

    //============  Getters & Setters  =============/
    getName() { return this.name; }
    
    setName() { return this.name; }


    //============= Adding Methods =============/

    //--Used in UI.showNewMemberMenu(em : AffairManager)
    addMember(memberName : string, memberEmail : string) {
        //Create member object??
    }

    //--Used inUI.ShowNewAffairMenu(em :AffairManager)
    addAffair(affairName : string, zipcode : string, date : string){
        //Create object??
    }

    //--Used in UI.showNewOrganizationMenu(em : AffairManager)
    addOrganization(organizationName : string){
        
    }

    //Add a member to an event's roster
    //--Used in UI.showAddToAffairMenu(em : AffairManager, affairName? : string)
    addMemberToAffair(memberName : string, affairName : string){

    }


    //============= Finding Methods =============//

    //Search Members list
    //--Used in UI.showSearchMembersMenu : string | undefined)
    findMemberNames(query : string): string | undefined {
        return "";
    }


    //Search Affairs List - return object?
    //--Used in UI.showSearchAffairsMenu(em : AffairManager : string | undefined)
    findAffairNames(query : string): string | undefined {
        return "";
    }

    //Search Organizations from AM list
    //--Used in UI.showSearchOrganizationMenu(em : AffairManager) : string | undefined)
    findOrganizationNames(query : string): string | undefined {
        return "";
    }


    //============= Modify Methods =============//

    //--Used in UI.showModifyAffairMenu(em : AffairManager, affairName? : string)
    modifyAffair(affairName : string, newTitle : string | undefined, newTime : string){

    }


    //============= Misc Methods ===============/


    //-- Used in UI.showAddToOrganizationMenu(em : AffairManager, organizationName? : string, affairName? : string)
    addAffairToOrganization(affairName: string, organizationName : string){

    }


    //-- Used in UI.showListAffairMambers(em : AffairManager)
    getMembers(affairName : string){

    }
    

}