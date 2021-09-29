"use strict";
exports.__esModule = true;
exports.Member = void 0;
var Member = /** @class */ (function () {
    //Constructors
    function Member(name, email) {
        this.name = name;
        this.email = email;
    }
    //Getters
    Member.prototype.getName = function () { return this.name; };
    Member.prototype.getEmail = function () { return this.email; };
    //Setters
    Member.prototype.setName = function (name) { this.name = name; };
    Member.prototype.setEmail = function (email) { this.email = email; };
    return Member;
}());
exports.Member = Member;
