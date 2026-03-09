// Filter method
let marks = [75,49,56,70,82];
let passed = marks.filter(mark => mark >=70);

console.log(marks);
console.log(passed);

let scores =[
    {name:"Chandu",marks:75 },
     {name:"veeru",marks:49 },
      {name:"inchu",marks:56},
       {name:"sachi",marks:70 },
        {name:"Nithi",marks:82 }
];
console.log(scores);

let qualifiedStudents= scores.filter(m => m.marks>=70);
console.log(qualifiedStudents);
//or
let qualifiedStudents1= scores.filter(m => m.marks>=70).map(user => user.name);
console.log(qualifiedStudents1);
// or
let names = qualifiedStudents.map(user => user.name);
console.log(names);
