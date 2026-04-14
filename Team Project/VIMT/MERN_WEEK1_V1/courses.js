const courses = [
    {
        id:1,
        title:"Frontend developer",
        description:"Client based development",
        limit:150,
        lessons:[
            {name:"HTML"},
            {name:"CSS"},
            {name:"Javascript"}
        ]
    },
    {
        id:2,
        title:"Backend developer",
        description:"Server based development",
        limit:100,
        lessons:[
            {name:"Python"},
            {name:"Java"},
            {name:"Mongodb"}
        ]
    },
    {
        id:3,
        title:"Fullstack developer",
        description:"Client and Server based development",
        limit:50,
        lessons:[
            {name:"HTML"},
            {name:"CSS"},
            {name:"Javascript"},
            {name:"NodeJS"},
            {name:"ExpressJS"}
        ]
    }
];

module.exports = courses;