(function () {
    'use strict';
    /* Start of your code */
    function comp(obj1, obj2){
        if(obj1.age == obj2.age)
            return 0;
        else if(obj1.age < obj2.age)
            return 1;
        else    
            return -1;
    }

    var myObj =
        [
            { 'name': 'Saurabh', 'age': 30, 'occupation': "Team Leader" },
            { 'name': 'Anupriya', 'age': 32, 'occupation': "Team Leader" },
            { 'name': 'Kalyani', 'age': 25, 'occupation': "Programmer" },
            { 'name': 'Damodaran', 'age': 27, 'occupation': "Programmer" },
            { 'name': 'Krishnakath', 'age': 22, 'occupation': "Programmer" },
            { 'name': 'Venketraman', 'age': 28, 'occupation': "Programmer" }
    ];

    myObj.forEach(function(i){
        if(i.occupation == "Programmer")
            console.log(i);
    })
    console.log(myObj.sort(comp));
    var prop = Object.keys(myObj);
    // var newColl = [];
    // myObj.forEach(function(i){
    //     if(!(newColl.hasOwnPoperty(i.occupation))){
    //         newColl.push({
    //             i.occupation:[]
    //         });
    //     }
    // })
    var names = myObj.map(function(obj){
        return obj.name;
    });
    console.log(names);
    /* End of your code */

})();