import express from "express";
import path from "path";//to interact with diff paths
import { fileURLToPath} from "url";//to interact with diff url paths


//middle ware newNode/public/index.html
//middle ware method
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);//pushing data to port
const server =  express();
//this is middle ware
server.use(express.static("public"));

server.get("/",(req,res) => {
    //res.sendFile(path.join(__dirname,"public","index.html"));   this in manual method
    res.sendFile(path.join(__dirname,"index.html"));
});
server.listen(3000,() => {
    console.log("server started at 3000");
});