const express = require("express");
const app = express();
const port = 3000;
app.get("/" , (req , res) => {
    res.json({name : "Amit"})
});

app.get("/user/all" , (req , res) => {
 const users = [{name : "A"} , {name : "B"}];
 res.json(users);
});

app.listen(port , () => console.log(`Running on port ${port}`));