(function () {
    'use strict';
    /* Start of your code */
    function flatten(obj) {
        var str = obj.toString();
        str = str.trim();
        var ret = str.split(",");
        return ret;
    }

    var myObj = [5, [22], [[14]], [[4]], [5, 6]]
    console.log(flatten(myObj))
    /* End of your code */

})();