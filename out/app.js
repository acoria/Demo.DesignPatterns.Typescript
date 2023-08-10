var _a, _b;
var Person = /** @class */ (function () {
    function Person() {
        this.firstname = "";
    }
    return Person;
}());
// const myPerson = new Person();
// myPerson.takeIf<Person>((instance) => instance.firstname === "Peter");
var Test = /** @class */ (function () {
    function Test(value) {
        this.value = value;
    }
    Test.prototype.fetch = function () {
        return this.value;
    };
    return Test;
}());
var test = new Test();
// const firstna
var firstname = (_b = (_a = test.fetch()) === null || _a === void 0 ? void 0 : _a.firstname) !== null && _b !== void 0 ? _b : "Another name";
console.log(firstname);
//# sourceMappingURL=app.js.map