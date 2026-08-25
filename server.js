console.log("Web serverni boshlash");

const express = require("express");
const app = express();
const http = require("http");

// 1 kirish codelari
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// 2 sessions code

// 3 Views code
app.set("views", "views");
app.set("view engines", "ejs");

// 4 Routing Code
app.get("/hello", function(req, res){
    res.end("<h1>Hello, World!</h1>");
})

app.get("/gift", function(req, res){
    res.end("<h1>Siz sovg'alar bo'limidasiz!</h1>");
})

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function(){
    console.log(`The server is running successfully on port: ${PORT}`);
});
