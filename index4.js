import express from "express";
const server = express();
server.get("/",(req,res) => {
    res.send("i am home");
}
);

server.get("/varshu",(req,res) =>{
    res.send("this is varshu");
});

server.get("/siri",(req,res) =>{
    res.send("this is siri");
});

server.listen(3000,() => {
    console.log("3000");
});