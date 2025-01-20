import logo from './logo.svg';
import './App.css';
import RegisterForm from './Register';
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function App() {
  
  return (
 <div>
  <RegisterForm/>
 </div>
  );
}

export default App;
