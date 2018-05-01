abstract class People {
  displayDate() {
    console.log("some date");
  }
}

class Kids extends People {

}

let kidsClass = new Kids;
kidsClass.displayDate();
