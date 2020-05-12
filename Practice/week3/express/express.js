//Including the expression package  for our script
const express = require ("express");
//Run the express servver 
const app = express();
//load HTP and attach our express server to fit 
const http = require ("http").Server(app);
//Listening to to port
const port = 8080;
//Tells HTTP what port to listen to.
http.listen(port);
//Express routes express.static, ("./public.html")used to tell express it's a directory folder
 
app.use("/client", express.static( ("./public_html"));
//Signify Express server is running
 console.log('express is now running on port${port}');