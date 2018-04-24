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
car_1(automobile);
