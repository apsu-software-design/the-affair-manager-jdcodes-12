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
        //Search for the event
        for (var i = 0; i < this.affairsList.length; i++) {
            if (this.affairsList[i].getName() === affairName) {
                selectedAffair = this.affairsList[i];
                break;
            }
        }
        //Add new member to that roster
        selectedAffair.getEnrolledMembers().push(this.findMemberNames(memberName));
    };
    //============= Finding Methods =============//
    //Search Members list
    //--Used in UI.showSearchMembersMenu : string | undefined)
    AffairManager.prototype.findMemberNames = function (query) {
        for (var i = 0; i < this.membersList.length; i++) {
            if (query === this.membersList[i].getName()) {
                return this.membersList[i].getName();
            }
        }
    };
    //Search Affairs List, return the Affair Object
    //--Used in UI.showSearchAffairsMenu(em : AffairManager : string | undefined)
    AffairManager.prototype.findAffairNames = function (query) {
        for (var i = 0; i < this.affairsList.length; i++) {
            if (query.toLowerCase() === this.affairsList[i].getName()) {
                return this.affairsList[i].getEnrolledMembers();
            }
        }
    };
    //Search Organizations from AM list
    //--Used in UI.showSearchOrganizationMenu(em : AffairManager) : string | undefined)
    AffairManager.prototype.findOrganizationNames = function (query) {
        for (var i = 0; i < this.organizationList.length; i++) {
            if (query === this.organizationList[i].getName()) {
                return this.organizationList[i].getName();
            }
        }
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
        return null;
    };
    //
    AffairManager.prototype.displayMembers = function () {
        for (var i = 0; i < this.membersList.length; i++) {
            console.log(this.membersList[i].getName());
        }
    };
    AffairManager.prototype.displayAffairs = function () {
        for (var i = 0; i < this.affairsList.length; i++) {
            console.log(this.affairsList[i].getName());
        }
    };
    AffairManager.prototype.displayOrganizations = function () {
        for (var i = 0; i < this.organizationList.length; i++) {
            console.log(this.organizationList[i].getName());
        }
    };
    return AffairManager;
}());
exports.AffairManager = AffairManager;
