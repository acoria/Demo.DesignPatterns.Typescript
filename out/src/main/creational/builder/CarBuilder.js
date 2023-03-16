"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarBuilder = void 0;
var Engine_1 = require("./Engine");
var CarBuilder = /** @class */ (function () {
    function CarBuilder() {
    }
    CarBuilder.prototype.setEngine = function (engine) {
        this.engine = engine;
        return this;
    };
    CarBuilder.prototype.setNumberOfDoors = function (doors) {
        this.numberOfDoors = doors;
        return this;
    };
    CarBuilder.prototype.setColor = function (color) {
        this.color = color;
        return this;
    };
    CarBuilder.prototype.setBoseSoundSystem = function () {
        this.soundSystem = "Bose";
        return this;
    };
    CarBuilder.prototype.addSeatHeating = function () {
        this.seatHeating = "SeatHeating";
        return this;
    };
    CarBuilder.prototype.addSteeringWheelHeating = function () {
        this.steeringWheelHeating = "SteeringWheelHeating";
        return this;
    };
    CarBuilder.prototype.addStartStopSystem = function () {
        this.startStopSystem = "StartStopSystem";
        return this;
    };
    CarBuilder.prototype.build = function () {
        return null;
    };
    CarBuilder.prototype.build2 = function () {
        var _a;
        var age;
        age !== null && age !== void 0 ? age : (age = 3);
        this.engine = (_a = this.engine) !== null && _a !== void 0 ? _a : Engine_1.Engine.DIESEL;
        console.log(this.engine.toString());
    };
    return CarBuilder;
}());
exports.CarBuilder = CarBuilder;
//# sourceMappingURL=CarBuilder.js.map