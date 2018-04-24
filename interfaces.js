var automobile = {
    brand: "BMW",
    speed: 200,
    speedMethod: function () {
        console.log("this " + this.brand + " is going at " + this.speed + " miles an hour");
    }
};
function car_1(automobile) {
    automobile.speed = 500;
    console.log("this " + automobile.brand + " is going at " + automobile.speed + " miles an hour");
}
// car_1(automobile);
var AutoMobileClass = /** @class */ (function () {
    function AutoMobileClass() {
    }
    AutoMobileClass.prototype.speedMethod = function (speed) {
        console.log("Hi my car is going at " + speed);
    };
    return AutoMobileClass;
}());
var carObj = new AutoMobileClass();
carObj.speedMethod(1000);
