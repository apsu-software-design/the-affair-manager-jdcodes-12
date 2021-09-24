var AffairManager = /** @class */ (function () {
    function AffairManager() {
    }
    //Fields
    //============= Adding Methods =============/
    //--Used in UI.showNewMemberMenu(em : AffairManager)
    AffairManager.prototype.addMember = function (memberName, memberEmail) {
        //Create member object??
    };
    //--Used inUI.ShowNewAffairMenu(em :AffairManager)
    AffairManager.prototype.addAffair = function (affairName, zipcode, date) {
        //Create object??
    };
    //--Used in UI.showNewOrganizationMenu(em : AffairManager)
    AffairManager.prototype.addOrganization = function (organizationName) {
    };
    //Add a member to an event's roster
    //--Used in UI.showAddToAffairMenu(em : AffairManager, affairName? : string)
    AffairManager.prototype.addMemberToAffair = function (memberName, affairName) {
    };
    //============= Finding Methods =============//
    //Search Members list
    //--Used in UI.showSearchMembersMenu : string | undefined)
    AffairManager.prototype.findMemberNames = function (query) {
        return "";
    };
    //Search Affairs List - return object?
    //--Used in UI.showSearchAffairsMenu(em : AffairManager : string | undefined)
    AffairManager.prototype.findAffairNames = function (query) {
        return "";
    };
    //Search Organizations from AM list
    //--Used in UI.showSearchOrganizationMenu(em : AffairManager) : string | undefined)
    AffairManager.prototype.findOrganizationNames = function (query) {
        return "";
    };
    //============= Modify Methods =============//
    //--Used in UI.showModifyAffairMenu(em : AffairManager, affairName? : string)
    AffairManager.prototype.modifyAffair = function (affairName, newTitle, newTime) {
    };
    //============= Misc Methods ===============/
    //-- Used in UI.showAddToOrganizationMenu(em : AffairManager, organizationName? : string, affairName? : string)
    AffairManager.prototype.addAffairToOrganization = function (affairName, organizationName) {
    };
    //-- Used in UI.showListAffairMambers(em : AffairManager)
    AffairManager.prototype.getMembers = function (affairName) {
    };
    return AffairManager;
}());
