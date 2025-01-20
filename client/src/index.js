import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client'; // Import 'react-dom/client' for React 18
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'; // Import React Router components
import AdminHome from './Admin/AdminHome';
import AdminLogin from './Admin/AdminLogin';
import App from './App';
import RegisterForm from './Authentication/Register';
import ComplaintForm from './ComplaintForm';
import Home from './Home';
import Login from './Authentication/Login';
import ProtectedRoute from './ProtectedRoute';
import './styles/index.css';

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
