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
    /**
     * Option 1 - Add member to AffairManager's membersList : Array<Member>
     */
    AffairManager.prototype.addMember = function (memberName, memberEmail) {
        for (var i = 0; i < this.membersList.length; i++) {
            if (memberName.toLowerCase() === this.membersList[i].getName().toLowerCase()) {
                return this.membersList[i].getName();
            }
        }
        this.membersList.push(new Member_1.Member(memberName, memberEmail));
    };
    /**
     * Option 2 - Add affair to AffairManager's affairsList : Array<Affairs>
     */
    AffairManager.prototype.addAffair = function (affairName, zipcode, date) {
        for (var i = 0; i < this.affairsList.length; i++) {
            if (affairName.toLowerCase() === this.affairsList[i].getName().toLowerCase()) {
                return this.affairsList[i].getName();
            }
        }
        this.affairsList.push(new Affairs_1.Affairs(affairName, zipcode, date));
    };
    /**
     * Option 3 - Add organization to AffairManager's organizationList : Array<Organization>
     */
    AffairManager.prototype.addOrganization = function (organizationName) {
        for (var i = 0; i < this.organizationList.length; i++) {
            if (organizationName.toLowerCase() === this.organizationList[i].getName().toLowerCase()) {
                return this.organizationList[i].getName();
            }
        }
        this.organizationList.push(new Organization_1.Organization(organizationName));
    };
    /**
     * Option 4 -- Add an existing member to an affair
     * @param memberName - a mamber's name
     * @param affairName - an event's name
     */
    AffairManager.prototype.addMemberToAffair = function (memberName, affairName) {
        var selectedAffair;
        var selectedMember;
        for (var i = 0; i < this.affairsList.length; i++) {
            if (this.affairsList[i].getName().toLowerCase() === affairName.toLowerCase()) {
                selectedAffair = this.affairsList[i];
                break;
            }
        }
        for (var i = 0; i < this.membersList.length; i++) {
            if (this.membersList[i].getName().toLowerCase() === memberName.toLowerCase()) {
                selectedMember = this.membersList[i];
                break;
            }
        }
        if (selectedAffair.getEnrolledMembers().indexOf(selectedMember, 0) === -1) {
            selectedAffair.getEnrolledMembers().push(selectedMember);
        }
        else {
            console.log("\nMember already is registered for " + selectedAffair.getName());
        }
    };
    /**
     *
     * @returns an array of strings : member names
     */
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
    AffairManager.prototype.modifyAffair = function (affairName, newName, newTime) {
        var selectedAffair;
        for (var i = 0; i < this.affairsList.length; i++) {
            if (affairName.toLowerCase() === this.affairsList[i].getName().toLowerCase()) {
                selectedAffair = this.affairsList[i];
            }
        }
        //Edit Title
        if (newName !== undefined) {
            selectedAffair.setName(newName);
        }
        //Edit Time
        if (newTime !== undefined) {
            selectedAffair.setDate(newTime);
        }
    };
    AffairManager.prototype.addAffairToOrganization = function (affairName, organizationName) {
        var selectedOrganization;
        var selectedAffair;
        for (var i = 0; i < this.organizationList.length; i++) {
            if (organizationName.toLowerCase() === this.organizationList[i].getName().toLowerCase()) {
                selectedOrganization = this.organizationList[i];
            }
        }
        for (var i = 0; i < this.affairsList.length; i++) {
            if (affairName.toLowerCase() === this.affairsList[i].getName().toLowerCase()) {
                selectedAffair = this.affairsList[i];
            }
        }
        if (selectedOrganization.getAffairsHostedList().indexOf(selectedAffair, 0) === -1) {
            selectedOrganization.getAffairsHostedList().push(selectedAffair);
        }
        else {
            console.log("\nAffair already is registered as an event for " + selectedOrganization.getName());
        }
    };
    /**
     * Helper function to filter lists from Organization & Affair objects
     */
    AffairManager.prototype.filterListForNames = function (list) {
        var extractedNames = [];
        for (var i = 0; i < list.length; i++) {
            extractedNames[i] = list[i].getName();
        }
        return extractedNames;
    };
    AffairManager.prototype.getMembers = function (affairName) {
        for (var i = 0; i < this.affairsList.length; i++) {
            if (affairName.toLowerCase() === this.affairsList[i].getName().toLowerCase()) {
                return this.affairsList[i].getEnrolledMembers();
            }
        }
    };
    /**
     * Doesn't work
     * @param organizationName
     * @returns
     */
    AffairManager.prototype.getAffairs = function (organizationName) {
        for (var i = 0; i < this.organizationList.length; i++) {
            if (organizationName.toLowerCase() === this.organizationList[i].getName().toLowerCase()) {
                return this.organizationList[i].getAffairsHostedList();
            }
        }
    };
    AffairManager.prototype.displayRegisteredMembers = function () {
        console.log("\n-----Registered Members-----");
        for (var i = 0; i < this.membersList.length; i++) {
            console.log("~~~ Member #" + (i + 1) + " ~~~\n");
            console.log("Name: " + this.membersList[i].getName());
            console.log("Email: " + this.membersList[i].getEmail() + "\n");
        }
    };
    AffairManager.prototype.displayRegisteredAffairs = function () {
        console.log("\n-----Registered Affairs-----");
        for (var i = 0; i < this.affairsList.length; i++) {
            console.log("~~~ Affair #" + (i + 1) + " ~~~:\n");
            console.log("Name: " + this.affairsList[i].getName());
            console.log("Zipcode: " + this.affairsList[i].getZipcode());
            console.log("Date: " + this.affairsList[i].getDate() + "\n");
        }
    };
    AffairManager.prototype.displayRegisteredOrganizations = function () {
        console.log("\n-----Registered Organizations -----");
        for (var i = 0; i < this.organizationList.length; i++) {
            console.log("~~~ Organization #" + (i + 1) + " ~~~\n");
            console.log("Name: " + this.organizationList[i].getName() + "\n");
        }
    };
    return AffairManager;
}());
exports.AffairManager = AffairManager;
