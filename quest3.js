(function () {
    'use strict';
    /* Start of your code */
    var num = window.prompt();
    var str = num.toString();
    var result = str[0];

    for (var x = 1; x < str.length; x++) {
        if (str[x - 1] % 2 === 0 && str[x] % 2 === 0) {
            result += '-'+str[x];
        } else {
            result += str[x];
        }
    }
    console.log(result);
    /* End of your code */
  
  }) ();