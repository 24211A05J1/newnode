import http from "http";
//imported http
const server = http.createServer(
    (req,res)=>{
        if(req.url == "/"){
            res.write("this is home");
        }
        else if(req.url == "/varshu"){
            res.write("this is varshu");
        }
        else{
            res.write("hello world");
        }
        res.end();
    }
);
server.listen(3000,() => {
    console.log("server is runner on 3000");
});