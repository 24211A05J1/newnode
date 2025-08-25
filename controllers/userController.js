import User from "../models/User.js";
export const createUser = async (req,res,next)=>{
    try{
        const {name,email} = req.body;
        const user = new User ({name,email});
        await user.save();
    }
    catch(err){
        next(err);
    }
};

//get all user read operation
export const getUsers = async(req,res,next)=>{
    try{
        const users = await User.find();
        res.json({success:true,users});
    }
    catch{
        next(err);
    }
};


//