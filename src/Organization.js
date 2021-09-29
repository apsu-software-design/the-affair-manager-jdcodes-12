"use strict";
exports.__esModule = true;
exports.Organization = void 0;
var Organization = /** @class */ (function () {
    //Constructors
    function Organization(name) {
        this.name = name;
        this.affairsHosted = []; //Set to null
        this.organizationMembers = []; //Set to null
    }
    //Getters
    Organization.prototype.getName = function () { return this.name; };
    Organization.prototype.getAffairsHostedList = function () { return this.affairsHosted; };
    Organization.prototype.getOrganizationMembersList = function () { return this.organizationMembers; };
    //Setters
    Organization.prototype.setName = function (name) { this.name = name; };
    return Organization;
}());
exports.Organization = Organization;
