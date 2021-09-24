"use strict";
exports.__esModule = true;
exports.Organization = void 0;
var Organization = /** @class */ (function () {
    //Constructors
    function Organization(name) {
        this.name = name;
        this.hostedAffairs = []; //Set to null
        this.orgMembers = []; //Set to null
    }
    //Getters
    Organization.prototype.getName = function () { return this.name; };
    Organization.prototype.getHostedAffairs = function () { return this.hostedAffairs; };
    Organization.prototype.getOrgMembers = function () { return this.orgMembers; };
    //Setters
    Organization.prototype.setName = function (name) { this.name = name; };
    return Organization;
}());
exports.Organization = Organization;
