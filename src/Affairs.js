"use strict";
exports.__esModule = true;
exports.Affairs = void 0;
var Affairs = /** @class */ (function () {
    //Constructors
    function Affairs(name, zipcode, date) {
        this.name = name;
        this.zipcode = zipcode;
        this.date = date;
        this.enrolledMembers = []; //set to empty array
    }
    //Getters
    Affairs.prototype.getName = function () { return this.name; };
    Affairs.prototype.getZipcode = function () { return this.zipcode; };
    Affairs.prototype.getDate = function () { return this.date; };
    Affairs.prototype.getEnrolledMembers = function () { return this.enrolledMembers; };
    //Setters
    Affairs.prototype.setName = function (name) { this.name = name; };
    Affairs.prototype.setZipcode = function (zipcode) { this.zipcode = zipcode; };
    Affairs.prototype.setDate = function (date) { this.date = date; };
    //Utility Methods -- Do I even need this?
    Affairs.prototype.viewEnrolledMembers = function () {
        for (var i = 0; i < this.enrolledMembers.length; i++) {
        }
    };
    return Affairs;
}());
exports.Affairs = Affairs;
