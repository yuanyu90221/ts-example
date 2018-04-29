class Building {
  windows: string;

  escalators() {
    console.log('The escalators is moving')
  }
}

class Building2 extends Building {

}
// const building = new Building;

// building.escalators();

const building2 = new Building2;
building2.escalators();