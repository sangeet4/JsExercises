(function () {
    'use strict';
    /* Start of your code */
    function retJsonProp(str) {
        var obj = JSON.parse(str);
        var result = '';
        for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
                result += i + ' = ' + obj[i] + '\n';
            }
        }
        return result;
    }
    var jsonStr = '{"mike":"Book","jason":"sweater","chels":"iPad"}';
    console.log(retJsonProp(jsonStr));
    /* End of your code */

})();