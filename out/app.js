var Person = /** @class */ (function () {
    function Person() {
        this.firstname = "";
    }
    return Person;
}());
var myPerson = new Person();
myPerson.takeIf(function (instance) { return instance.firstname == "Peter"; });
//# sourceMappingURL=app.js.map