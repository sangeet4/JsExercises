(function () {
    'use strict';
    /* Start of your code */
    function diffArray(arr1, arr2){
        if(arr1.length != arr2.length){
            console.log("Array elements Count Not Same");
            return;
        }
        var ret=[],
            len = arr1.length;
        for(let i=0; i < len; i++){
            ret[i] = arr1[i] - arr2[i];
        }
        return ret;
    }
    var arr1 = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3];
    var arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 4];
    var result = diffArray(arr1, arr2);
    if(result != undefined){
        console.log(arr1);
        console.log(arr2);
        console.log(result);
    }
    /* End of your code */
  
  }) ();