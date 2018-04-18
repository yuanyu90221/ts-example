function stringFunction() {
    console.log("Hello I'm a function");
}
function cal(val1, val2) {
    var total = val1 + val2;
    return total;
}
cal(2, 2);
var universal = cal;
// universal(4,4);
console.log(universal(4, 4));
