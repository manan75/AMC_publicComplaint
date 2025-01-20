const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require('./Models/Users');
const jwt = require("jsonwebtoken");
const AdminModel = require("./Models/AdminModel");
const ComplaintModel = require("./Models/Complaints");

const app = express();
app.use(express.json());
app.use(cors());

const SECRET_KEY = "your_secret_key";

// Connect to MongoDB
mongoose.connect("mongodb+srv://MananDataB:manan2005@cluster0.a3rww.mongodb.net/Users?retryWrites=true&w=majority&appName=Cluster0");

// Create a new user
app.post('/', (req, res) => {
  UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err));
});

// Login for users
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  UserModel.findOne({ email: email })
    .then(user => {
      if (user) {
        if (user.password === password) {
          const token = jwt.sign(
            { id: user._id, email: user.email },
            SECRET_KEY,
            { expiresIn: "1hr" }
          );
          res.json({ message: "Success", token, user });
        } else {
          res.json({ message: "Incorrect password" });
        }
      } else {
        res.json({ message: "No record found" });
      }
    })
    .catch(err => res.status(500).json({ message: "Server error", error: err }));
});

// Login for admins
app.post('/adminlogin', (req, res) => {
  const { email, password } = req.body;
  AdminModel.findOne({ email: email })
    .then(user => {
      if (user) {
        if (user.password === password) {
          const token = jwt.sign(
            { id: user._id, email: user.email },
            SECRET_KEY,
            { expiresIn: "1hr" }
          );
          res.json({ message: "Success", token, user });
        } else {
          res.json({ message: "Incorrect password" });
        }
      } else {
        res.json({ message: "No record found" });
      }
    })
    .catch(err => res.status(500).json({ message: "Server error", error: err }));
});

// Submit a complaint form
app.post('/ComplaintForm', (req, res) => {
  ComplaintModel.create(req.body)
    .then(complaint => res.json(complaint))
    .catch(err => res.status(500).json({ message: "Failed to submit complaint", error: err }));
});

// Middleware to verify token
const verifyToken = (req, res, next) => {
  const token = req.headers["token"];

  if (!token) {
    return res.status(403).json({ message: "Access denied" });
  }

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token" });
    }
    req.user = user;
    next();
  });
};

// Protected route: Get user data
app.get('/home', verifyToken, (req, res) => {
  const { email } = req.user;

  UserModel.findOne({ email: email })
    .then(user => {
      if (!user) {
        return res.status(404).json({ message: "User not found." });
      }
      res.json({ email: user.email });
    })
    .catch(err => res.status(500).json({ message: "An error occurred on the server.", error: err }));
});

// Start the server
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
