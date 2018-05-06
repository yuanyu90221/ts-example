var myNamespace;
(function (myNamespace) {
    myNamespace.name = "Maria11";
    function displayData(value) {
        return value;
    }
    myNamespace.displayData = displayData;
})(myNamespace || (myNamespace = {}));
///<reference path="module1.ts" />
var thisSpace = myNamespace.displayData;
console.log(thisSpace("HELLO this test"));
