const express = require("express");
const parser = require("body-parser");
const cookieParser = require('cookie-parser')
const { config } = require("nodemon");
const app = express();

app.set("view engine", "ejs");
app.use(parser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser())

app.use("/", (req, res, next) => {
    res.set({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Expose-Headers": "*",
      /* Expose headers makes the header sent by the server 'available' on the front-end. */
    });
    next();
  });
  

app.get("/",(req,res) => {
    res.set({
        "Hint" : "Robots are hidden somewhere on the server."
    });
    res.render("index");
    res.status(200);
})

app.post("/", (req, res) => {
    let stuff = req.body.thoughts;
    res.render("sigma", { stuff: stuff });
});

app.get('/robots.txt', function (req, res) {
    res.cookie("KEY" , "Oedipus complex")
    res.type("text/plain");
    res.render("robots", { //use .ejs extension instead of .txt
        home : config.home
    });
});


app.listen(3000);