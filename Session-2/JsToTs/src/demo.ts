var Name = /** @class */ (function () {
    function Name(fname, lname) {
        this.first_name = fname;
        this.last_name = lname;
    }
    Name.prototype.display = function () {
        var fullname = this.first_name + " " + this.last_name;
        return fullname;
    };
    return Name;
}());
var obj = new Name("sonam", "soni");
console.log(obj.display());
//# sourceMappingURL=demo.js.map
//# sourceMappingURL=demo.js.map