(function () {
    'use strict';
    /* Start of your code */
    function objVal2Arr(obj) {
        var ret = [];
        for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
                ret.push(obj[i]);
            }
        }
        return ret;
    }
    var obj = {
        "One": "1",
        "Two": "2",
        "Three": "3",
        "Four": "4"
    };
    console.log(objVal2Arr(obj));
    /* End of your code */

})();