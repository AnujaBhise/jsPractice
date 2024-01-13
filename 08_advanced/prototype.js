const student = {
    fullName : "anuja bhise",
    marks: 94.4,
    printMarks: function(){
        console.log("marks = ",this.marks);
    },
};

const emp ={
    calcTax(){
        console.log("taxx rate is 10%");
    }
}
emp.calcTax()

const karanArjun ={
    salary : 5000,
}

karanArjun.__proto__ = emp ;