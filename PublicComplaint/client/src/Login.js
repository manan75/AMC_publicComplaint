
import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Login() {
  

  
  const navigate = useNavigate();
  const handleRegister = (e) => {
   e.preventDefault();
   
   axios.post('http://localhost:3001/login',{email,password})
  .then(result=>{
    const { message, user, token } = result.data;
    console.log(token)
    if(message=="Success"){
     if(user && token){
      localStorage.setItem("token", token)
      localStorage.setItem('user', JSON.stringify(user));
        navigate('/home', {state: {user, token}})
     }
   
    }
    else{
      alert(result.data.message)
    }
    
  })
   .catch(err=>console.log(err))
    // Add logic to handle user registration
  };

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <h3 className="text-center mb-4">Login</h3>
          <Form onSubmit={handleRegister}>
           
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
               onChange={(e)=>setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                name="password"
                onChange={(e)=>setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
             Login
            </Button>
          </Form>

        
        </Col>
      </Row>
  
    </Container>
  );
}

export default Login;
