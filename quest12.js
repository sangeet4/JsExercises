(function () {
    'use strict';
    /* Start of your code */
    function countOccurence(str, char){
        var arr = str.split(char);
        return arr.length - 1;
    }
    var str = 'gmail.com';
    var char = 'm';
    console.log(str+", "+char);
    console.log(countOccurence(str, char));
    /* End of your code */

})();