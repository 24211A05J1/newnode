import http from "http";
//insecure compared to express
//http module has every operation u can do on a http related stuff
const server = http.createServer(
    (req,res) =>{
        //to log hello world message in my server
        res.write("Hello World");
        res.end(); // to close the function,same as file pointer
    }
);
//a port listens a server , to use server in port
server.listen(3000,()=>{
    // to know wts happening in backend
    console.log("Server is at 3000");
}
);