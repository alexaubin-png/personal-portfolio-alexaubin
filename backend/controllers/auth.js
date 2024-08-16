//import user schema from models directory, or else our request/response object will not be available.
 require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SALT = process.env.SALT
const User = require('../models/User');

exports.registerNewUser = async (req,res) => {
try{
const hashedPassword = await bcrypt.hash(req.body.password, 10);

const user = new User({
username: req.body.username,
password: hashedPassword,
});

// Validate input data
if (!req.body.username || !req.body.password) {
throw new Error("Please provide username and password.");
}
const newUser = await user.save();//saving our new user because user is already in our database/schema
res.status(201).json(newUser);//201 for successful registration/creation

}catch(error){
console.log(error)
res.status(500).json({message:"internal error"})
}
}

exports.loginUser = async (req, res) => {
    try {
        const user = await User.findOne({username: req.body.username});//will allow other code to wait from executing until the user is found 
        console.log(user)
        if (!user) //data validation  if the user is not a user throw an erorr
        throw new Error('invalid credentials')
         
        
       
        const validPassword = await bcrypt.compare(req.body.password, user.password);//comapres the entered password to the users password 
        if (!validPassword) 
        throw new Error('invalid credentials')
        
        const token = jwt.sign({ id: user._id }, SALT);//declaring a token variable to be used elsewhere and assigning the users token to their automatically assinged ID
        res.status(200).json({ token });
      } catch (error) {
        console.log(error);
        res.status(400).json({ message: error.message });
      }

}
exports.updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User updated successfully", user: updatedUser });
    } catch (error) {
        console.error("Error updating user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
exports.deleteUser = async(req,res) => {
    try{
        const updatedUser = await User.findByIdAndDelete(req.params.id, req.body, { new: true })
        if (!updatedUser) {
            return res.status(404).json({ message: "User failed to delete!" });
        }
        res.status(200).json({ message: "User deleted successfully", user: updatedUser });
    }catch(error){
        console.error("error deleting user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}