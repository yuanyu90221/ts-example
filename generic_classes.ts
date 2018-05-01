let array1: number[] = [1,2323,3];
let array2: Array<string> = ["12","23"];
class objectGenericsClass<TYPE1, TYPE2 extends string>{
  
  constructor(public value1: TYPE1, public value2: TYPE2) {

  }


}

let object1 = new objectGenericsClass<string, string>("HELLO","2");

let object2 = new objectGenericsClass<boolean, string>(true,"2");