interface AutomobileInterface {
  brand: string;
  speed: number;
  speedMethod(velocidad: number): void;
}
const automobile: AutomobileInterface = {
  brand: "BMW",
  speed: 200,
  speedMethod() {
    console.log(`this ${this.brand} is going at ${this.speed} miles an hour`);
  }
};

function car_1(automobile: AutomobileInterface) {
  automobile.speed = 500;
  console.log(`this ${automobile.brand} is going at ${automobile.speed} miles an hour`);
}

car_1(automobile);