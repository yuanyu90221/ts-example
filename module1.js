var myNamespace;
(function (myNamespace) {
    myNamespace.name = "Maria";
    function displayData() {
        return "Hi, my name is TESt";
    }
    myNamespace.displayData = displayData;
})(myNamespace || (myNamespace = {}));
