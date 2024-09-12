//import user schema from models directory, or else our request/response object will not be available.
 require('dotenv').config();
const bcrypt = require('bcrypt');
const JWT_SECRET = process.env.JWT_SECRET;
const jwt = require('jsonwebtoken');
const SALT = 10
const User = require('../models/User');
const nodemailer = require('nodemailer');
const { EMAIL, PASSWORD } = require('../env.js')
const Mailgen = require('mailgen');

exports.registerNewUser = async (req,res) => {
try{
const hashedPassword = await bcrypt.hash(req.body.password, SALT);
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
console.log( "registration error", error)
res.status(500).json({message:"internal error"})
}
}
exports.getBill = async (req, res) => {
    try{
        const { userEmail, userName, messageContent } = req.body

        const transporter = nodemailer.createTransport({
            service: 'gmail', // Use Gmail service
            auth: {
                user: 'alexjames4674@gmail.com', // Replace with your Gmail address
                pass: 'pqoo lxjg hklo xopb', // Replace with your app password
            },
        });
        // const config = {
        //     service: 'gmail',
        //     auth: {
        //         user: EMAIL,
        //         pass: PASSWORD,
        //     }
        // }
        // let transporter = nodemailer.createTransport(config)

        let MailGenerator = new Mailgen({
            theme: 'default',
            product: {
                name: 'Alex-Aubin-Personal-Portfolio',
                link: 'https://mailgen.js',
            },
        })
        let response = {
            body: {
                name:  userName || 'Customer',
                intro: 'You have received a new message from the contact form.',
                table: {
                data : [
                    {
                        item: 'Message Content',
                        description: messageContent || 'thanks reaching out',
                    }
                ]
                },
                outro: "thanks for reaching out to us"
            }
        }
        const mail = MailGenerator.generate(response)
const message = {
    from: EMAIL,
    to: userEmail || 'alexjames4674@gmail.com',
    subject: "New Contact Form Message",
    html: mail
}

transporter.sendMail(message, (error, info) => {
    if (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
    console.log('Mail sent: %s', info.messageId);
    return res.status(200).json({
        msg: 'Email sent successfully',
        info: info.messageId,
        preview: nodemailer.getTestMessageUrl(info),
    });
});
    // you can also handle the error here by returning a response with the error message
    // for now, we'll just return a success message
    // console.log('message send: %s', info, transporter)
    }catch(error){
        console.log("error sending bill")
        res.status(500).json(error.message)
    }
    // send the bill to the user's email
    // here you would put your logic to send the bill
    // for now, we'll just return a success message

  
// console.log('message send: %s', info, transporter)
  
}

exports.loginUser = async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });

        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const validPassword = await bcrypt.compare(req.body.password, user.password);

        if (!validPassword) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Ensure process.env.JWT_SECRET is defined and not empty
        if (!process.env.JWT_SECRET) {
            throw new Error('JWT_SECRET is not defined');
        }

        const token = jwt.sign({ id: user_id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ token });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
exports.updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        const user = await User.findById(req.params.id);
        if (!user) {
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