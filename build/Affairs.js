"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Affairs = void 0;
var Affairs = (function () {
    function Affairs(name, zipcode, date) {
        this.name = name;
        this.zipcode = zipcode;
        this.date = date;
        this.enrolledMembers = [];
    }
    Affairs.prototype.getName = function () { return this.name; };
    Affairs.prototype.getZipcode = function () { return this.zipcode; };
    Affairs.prototype.getDate = function () { return this.date; };
    Affairs.prototype.getEnrolledMembers = function () { return this.enrolledMembers; };
    Affairs.prototype.setName = function (name) { this.name = name; };
    Affairs.prototype.setZipcode = function (zipcode) { this.zipcode = zipcode; };
    Affairs.prototype.setDate = function (date) { this.date = date; };
    return Affairs;
}());
exports.Affairs = Affairs;
//# sourceMappingURL=Affairs.js.map