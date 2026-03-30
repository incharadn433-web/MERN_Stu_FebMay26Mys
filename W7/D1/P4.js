//Middleware usage in Express
//Middleware runs during the request-response cycle
//Middleware can inspect or change the request before
//a route responds
//next() passes control to the next step
const express = require("express");

const app = express();
//app.use registers middleware.
//This middleware runs for every incoming request.
