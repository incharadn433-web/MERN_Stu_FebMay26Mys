// Ticket queue
Ticket = [
    { id:"T101",priority:"HIGH",resolved:true},
    {id:"T102",priority:"MEDIUM",resolved:false},
    {id:"T103",priority:"LOW",resolved:true},
    {id:"T104",priority:"MEDIUM",resolved:false},
    {id:"T105",priority:"HIGH",resolved:true}
];
Ticket.unshift({id:"T106",priority:"HIGH",resolved:true});
console.log(Ticket);
Ticket.push({id:"T107",priority:"LOW",resolved:false},{id:"T108",priority:"MEDIUM",resolved:true});
console.log(Ticket);
let currentTicket=Ticket.shift();
console.log(currentTicket);
let droppedTicket = Ticket.pop();
console.log(droppedTicket);
let pending= Ticket.filter(m => m.resolved === false);
console.log(pending);
let pendingids = Ticket.map(user => user.id);
console.log(pendingids);

