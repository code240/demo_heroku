const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();

const port  = process.env.PORT || 7000;

const templates = path.join(__dirname,"public");
app.set("view engine","hbs");
app.set("views",templates);
app.use(express.static(path.join(__dirname, 'public')));

app.get("/",(req,res) =>{
    res.render("index");
});
app.get("/register",(req,res) =>{
    res.render("register");
});
app.use((req, res, next) => {
    res.status(404).send(
        "<h1>Page not found on the server</h1>"
        );
})
app.listen(port,()=>{
    console.log("server ready!!!");
})