"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Member = void 0;
var Member = (function () {
    function Member(name, email) {
        this.name = name;
        this.email = email;
    }
    Member.prototype.getName = function () { return this.name; };
    Member.prototype.getEmail = function () { return this.name; };
    Member.prototype.setName = function (name) { this.name = name; };
    Member.prototype.setEmail = function (email) { this.email = email; };
    return Member;
}());
exports.Member = Member;
//# sourceMappingURL=Member.js.map