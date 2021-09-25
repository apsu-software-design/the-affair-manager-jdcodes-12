"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffairManager = void 0;
var Organization_1 = require("./Organization");
var Affairs_1 = require("./Affairs");
var Member_1 = require("./Member");
var AffairManager = (function () {
    function AffairManager() {
        this.organizationList = [];
        this.affairsList = [];
        this.membersList = [];
    }
    AffairManager.prototype.addMember = function (memberName, memberEmail) {
        this.membersList.push(new Member_1.Member(memberName, memberEmail));
    };
    AffairManager.prototype.addAffair = function (affairName, zipcode, date) {
        this.affairsList.push(new Affairs_1.Affairs(affairName, zipcode, date));
    };
    AffairManager.prototype.addOrganization = function (organizationName) {
        this.organizationList.push(new Organization_1.Organization(organizationName));
    };
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
    AffairManager.prototype.findMemberNames = function () {
        return this.filterListForNames(this.membersList);
    };
    AffairManager.prototype.findAffairNames = function () {
        return this.filterListForNames(this.affairsList);
    };
    AffairManager.prototype.findOrganizationNames = function () {
        return this.filterListForNames(this.organizationList);
    };
    AffairManager.prototype.modifyAffair = function (affairName, newTitle, newTime) {
    };
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
//# sourceMappingURL=manager.js.map