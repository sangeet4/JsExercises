(function () {
    'use strict';
    /* Start of your code */
    var input = window.prompt();
    var email = /^[a-zA-Z]+[a-zA-Z0-9]*[!#$%&'*+-/=?^_`{|}~.]?[a-zA-Z0-9]+@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    if(email.test(input)){
        console.log("Valid Email ID");
    }
    else{
        console.log("Invalid Email ID");
    }
    /* End of your code */

})();