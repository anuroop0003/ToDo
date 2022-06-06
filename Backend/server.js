
import express from "express";
import ToDo from "./data.js";

const app = express();

app.get("/",(req, res) => {
    res.send("start listening");
})

app.get("/ToDo" ,(req, res) => {
    res.json(ToDo)
})

app.post("/signin", (req, res) =>{
    console.log(req);
})

const port = 5000;

app.listen(port, () =>{
    console.log(`server is listening at ${port}`);
})