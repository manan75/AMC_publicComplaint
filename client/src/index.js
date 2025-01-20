import React from 'react';
import ReactDOM from 'react-dom/client'; // Import 'react-dom/client' for React 18
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import React Router components
import RegisterForm from './Register';
import Login from './Login';
import Home from './Home';
import AdminLogin from './AdminLogin';
import AdminHome from './AdminHome';
import ComplaintForm from './ComplaintForm';
import ProtectedRoute from './ProtectedRoute';

// Create a root container for React 18
const root = ReactDOM.createRoot(document.getElementById('root')); // Ensure the ID matches the one in your index.html

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/ComplaintForm" element={<ComplaintForm />} />

        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Adminhome"
          element={
            <ProtectedRoute>
              <AdminHome />
            </ProtectedRoute>
          }
        />
        
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
