(function () {
    'use strict';
    /* Start of your code */
    function Student(name, marks){
        this.name = name;
        this.marks = marks;
    }
    function calculateGrades(marks){
        if(marks < 0)
            return "Invalid Marks";
        else if(marks < 60)
            return 'F';
        else if(marks < 70)
            return 'D';
        else if(marks < 80)
            return 'C';
        else if(marks < 90)
            return 'B';
        else if(marks <= 100)
            return 'A';
        else
            return "Invalid Marks";
    }
    var stu = [new Student("David", 80),
            new Student("Vinoth", 77),
            new Student("Divya", 88),
            new Student("Ishitha", 95),
            new Student("Thomas", 68)];
    //console.log(stu);
    stu.forEach(function(i){
        //console.log(i);
        console.log(i.name+"\t"+i.marks+"\t"+calculateGrades(i.marks)+"\n");
    });
    /* End of your code */

})();
