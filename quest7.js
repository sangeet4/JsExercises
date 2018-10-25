(function () {
    'use strict';
    /* Start of your code */
    function sorter(obj1, obj2) {
        if (obj1.title === obj2.title)
            return 0;
        else if (obj1.title < obj2.title)
            return -1;
        else
            return 1;
    }
    var library = [
        { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
        { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 },
        { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245 }
    ];
    console.log(library);
    library.sort(sorter);
    console.log(library);
    /* End of your code */

})();