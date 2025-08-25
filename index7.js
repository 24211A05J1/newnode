import express from "express";
import mongoose from "mongoose";

const server = express();
server.use(express.json());

//this is just for testing
//to connect our app ot database
mongoose.connect("mongodb://127.0.0.1:27017/testdb",{
    useNewUrlParser:true,useUnifiedToplogy:true,
}).then(() => {
    console.log("Yayyyyyy");
}).catch((err) => {
    console.log("not connected");
});


//creating schema
const userSchema = new mongoose.Schema({name: String,fav: String});
const User = mongoose.model("User",userSchema);


//creating a new database(user) and appending it to main database(User)
//make the user enter the name and fav
server.post("/users",async (req,res) => {
    try{
        const user = new User(req.body);
        await user.save(); //if u get response save it as a username
        res.status(201).send(user);      //anything starting with 200 succes 400 failuer 300 network
    }
    catch(err){
        res.status(400).send(err);
    }
});
server.get("/users",async(req,res) => {
    const user = await User.find();
    res.send(user);
})

//display the username and his fav //read by id
//when ever u are using a func of an object inside async func it should be
//awaited except when it is a constructor
server.get("/users/:id",async(req,res) => {
    try{
        const user = await User.findById(req.params.id);
        if(!user) return res.status(404).send({message:"user not found"});
        res.send(user);

    }
    catch(err){
        res.status(500).send(err);
    }
});


//updating //ntg to update cause v already used a schema it would be useless
//updating a particular entity in database
//get //post //put //delete

//updates a particulary entry by its id
server.put("/users/:id",async (req,res) => {
    try{
        const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!user){
            return res.status(404).send({message : "user not found"});
        }
        res.send(user);
    }
    catch(err){
        res.catch(400).send(err);
    }
});

server.delete("/users/:id",async (req,res) => {
    try{
        const user = User.findByIdAndDelete(req.params.id);
        if(!user) return res.status(404).send({message:"user not found"});
        res.send({message: "users gone"});
    }
    catch(err){
        res.status(500).send(err);
    }
});


server.listen(3000,() => {
    console.log("Server running at port 3000");
});