class Building {
  windows: string = "window 1";

  escalators() {
    console.log('The escalators is moving')
  }
}

class Building2 extends Building {
  escalators() {
    console.log(this.windows);
  }
}
// const building = new Building;

// building.escalators();

const building2 = new Building2;
building2.escalators();