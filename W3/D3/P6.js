//Nested object and Method
const Student = {
    firstname:"Nithin",
    lastname:"Rx",
    scores:{
        math:80,
        science:83
    },
    hobbies:["reading","singing"],
    fullname:function(){
        return this.firstname + " "+this.lastname;
    },
    greet(){
        console.log("Hi",this.fullname());
    }
};
// console.log(Student);
// console.log(Student.scores.math);
console.log(Student.fullname());