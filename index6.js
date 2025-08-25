import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import morgan from "morgan";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = express();

//middle ware
server.use(express.urlencoded({extended:true}));//server.use(middleware)
server.use(express.static("public"));//server.use(express.static("folder in which my html"))
//server.use(express.json());
//server.post("/data",(req,res) => {
//  req.json({received:req.body}); // this is for string data
//});
server.use(morgan("dev"));


server.post("/submit",(req,res) =>{
    const username = req.body.name;//the name v entered i the html
     res.send(`<h1>Hello ${username}</h1>`);
});



//app.get("route",function)
server.listen(3000,() => {
    console.log("server started at port 3000");
});

