function stringFunction(): string {
  
  console.log("Hello I'm a function");
  return "";
}

function cal(val1: number, val2: number): number {
  
  let total: number = val1 + val2;

  return total;
}

cal(2,2);

let universal: (value: number, value1: number)=>number;

universal = cal;
// universal(4,4);
console.log(universal(4,4));