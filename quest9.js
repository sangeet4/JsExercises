(function () {
    'use strict';
    /* Start of your code */
    function showProps(obj) {
        var result = '';
        for (var i in obj) {
            // obj.hasOwnProperty() is used to filter out properties from the object's prototype chain
            if (obj.hasOwnProperty(i)) {
                result += i + ' = ' + obj[i] + '\n';
            }
        }
        return result;
    }
    var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };
    console.log(showProps(student));
    /* End of your code */

})();