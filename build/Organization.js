"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Organization = void 0;
var Organization = (function () {
    function Organization(name) {
        this.name = name;
        this.affairsHosted = [];
        this.organizationMembers = [];
    }
    Organization.prototype.getName = function () { return this.name; };
    Organization.prototype.getAffairsHostedList = function () { return this.affairsHosted; };
    Organization.prototype.getOrganizationMembersList = function () { return this.organizationMembers; };
    Organization.prototype.setName = function (name) { this.name = name; };
    return Organization;
}());
exports.Organization = Organization;
//# sourceMappingURL=Organization.js.map