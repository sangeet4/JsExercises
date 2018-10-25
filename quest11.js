(function () {
    'use strict';
    /* Start of your code */
    function parseDict(str){
        var arr = str.split("");
        arr.sort();
        var ret = arr.join('');
        return ret;
    }
    var str = 'webmaster';
    console.log(str);
    console.log(parseDict(str));
    /* End of your code */

})();