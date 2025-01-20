const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require('./Models/Users')
const jwt = require("jsonwebtoken");
const AdminModel = require("./Models/AdminModel");
const ComplaintModel = require("./Models/Complaints");

const app = express()
app.use(express.json())
app.use(cors())



const SECRET_KEY = "your_secret_key";


//db string
mongoose.connect("mongodb+srv://MananDataB:manan2005@cluster0.a3rww.mongodb.net/Users?retryWrites=true&w=majority&appName=Cluster0")

app.post('/', (req,res)=>{
    
    UserModel.create(req.body)
    .then(users =>res.json(users))
    .catch(err=> res.json(err))
})
//for logging in
app.post('/login', (req,res)=>{
    const {email, password} = req.body;
    UserModel.findOne({email: email})
    .then(user=>{
        if(user){
            if(user.password == password){
                const token = jwt.sign(
                    { id: user._id, email: user.email },
                    SECRET_KEY,
                    { expiresIn: "1hr" }
                  );
                res.json({ message: "Success", token, user })
            }
            else{
                res.json("Incorrect password")
            }
        }
        else{
            res.json("No record found")
        }
    })
})

//for admin logging in
app.post('/adminlogin', (req,res)=>{
  const {email, password} = req.body;
  AdminModel.findOne({email: email})
  .then(user=>{
      if(user){
          if(user.password == password){
              const token = jwt.sign(
                  { id: user._id, email: user.email },
                  SECRET_KEY,
                  { expiresIn: "1hr" }
                );
              res.json({ message: "Success", token, user })
          }
          else{
              res.json("Incorrect password")
          }
      }
      else{
          res.json("No record found")
      }
  })
})

//submitting a complaint form

  app.post('/ComplaintForm', (req,res)=>{
    console.log('Request Body:', req.body);
      ComplaintModel.create(req.body)
      .then((complaint)=>res.json(complaint))
      .catch(err=>res.json(err))
  })

// Middleware to verify token
const verifyToken = (req, res, next) => {
    const token = req.headers["authorization"];
  
    if (!token) {
      return res.status(403).json("Access denied");
    }
  
    jwt.verify(token, SECRET_KEY, (err, user) => {
      if (err) {
        return res.status(401).json("Invalid token");
      }
      req.user = user;
      next();
    });
  };
  
  // Protected route example

  

app.listen(3001, ()=>{
    console.log("is running")

})