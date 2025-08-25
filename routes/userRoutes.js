//     /  /about  /users   /blabla   routes
// on which route what kin og request and response is to be enconuntered
import express from "express";
import {createUser,getUsers} from "../controllers/userController.js";
const router = express.Router();
router.post("/",createUser);
router.get("/",getUsers);
export default router;