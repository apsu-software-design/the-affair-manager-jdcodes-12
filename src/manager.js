"use strict";
exports.__esModule = true;
exports.AffairManager = void 0;
var Organization_1 = require("./Organization");
var Affairs_1 = require("./Affairs");
var Member_1 = require("./Member");
var AffairManager = /** @class */ (function () {
    function AffairManager() {
        this.organizationList = [];
        this.affairsList = [];
        this.membersList = [];
    }
    //--Used in UI.showNewMemberMenu(em : AffairManager)
    AffairManager.prototype.addMember = function (memberName, memberEmail) {
        this.membersList.push(new Member_1.Member(memberName, memberEmail));
    };
    //--Used inUI.ShowNewAffairMenu(em :AffairManager)
    AffairManager.prototype.addAffair = function (affairName, zipcode, date) {
        this.affairsList.push(new Affairs_1.Affairs(affairName, zipcode, date));
    };
    //--Used in UI.showNewOrganizationMenu(em : AffairManager)
    AffairManager.prototype.addOrganization = function (organizationName) {
        this.organizationList.push(new Organization_1.Organization(organizationName));
    };
    //Add a member to an event's roster
    //--Used in UI.showAddToAffairMenu(em : AffairManager, affairName? : string)
    AffairManager.prototype.addMemberToAffair = function (memberName, affairName) {
        var selectedAffair;
        for (var i = 0; i < this.affairsList.length; i++) {
            if (this.affairsList[i].getName().toLowerCase() === affairName.toLowerCase()) {
                selectedAffair = this.affairsList[i];
                break;
            }
        }
        selectedAffair.getEnrolledMembers().push(new Member_1.Member(memberName, undefined));
    };
    //============= Finding Methods =============//
    //Search Members list
    //--Used in UI.showSearchMembersMenu : string | undefined)
    AffairManager.prototype.findMemberNames = function () {
        return this.filterListForNames(this.membersList); //Extract names from list, store in fitlered list
    };
    //Search Affairs List, return the Affair Object
    //--Used in UI.showSearchAffairsMenu(em : AffairManager : string | undefined)
    AffairManager.prototype.findAffairNames = function () {
        return this.filterListForNames(this.affairsList);
    };
    //Search Organizations from AM list
    //--Used in UI.showSearchOrganizationMenu(em : AffairManager) : string | undefined)
    AffairManager.prototype.findOrganizationNames = function () {
        return this.filterListForNames(this.organizationList);
    };
    //============= Modify Methods =============//
    //--Used in UI.showModifyAffairMenu(em : AffairManager, affairName? : string)
    AffairManager.prototype.modifyAffair = function (affairName, newTitle, newTime) {
    };
    //============= Misc Methods ===============/
    //-- Used in UI.showAddToOrganizationMenu(em : AffairManager, organizationName? : string, affairName? : string)
    AffairManager.prototype.addAffairToOrganization = function (affairName, organizationName) {
    };
    AffairManager.prototype.filterListForNames = function (list) {
        var extractedNames = [];
        for (var i = 0; i < list.length; i++) {
            extractedNames[i] = list[i].getName();
        }
        console.log("Extracted names length: " + extractedNames.length);
        return extractedNames;
    };
    //-- Used in UI.showListAffairMambers(em : AffairManager)
    AffairManager.prototype.getMembers = function (affairName) {
        var affairMemebrs;
        for (var i = 0; i < this.affairsList.length; i++) {
            if (affairName.toLowerCase() === this.affairsList[i].getName().toLowerCase()) {
                affairMemebrs = this.affairsList[i].getEnrolledMembers();
            }
        }
        return affairMemebrs;
    };
    return AffairManager;
}());
exports.AffairManager = AffairManager;
