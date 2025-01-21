import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MainPage from "./FrontEndComponents/MainContent";
import NavbarMain from "./FrontEndComponents/Navbar";

function Home() {
  const [user, setUser] = useState(null);
  const token = localStorage.getItem('token');

  useEffect(() => {
    // Retrieve user data from localStorage
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  if (token) {
    return (
      <div>
        <NavbarMain />
        <h1>Home page, welcome {user?.email}</h1>
        <MainPage />
      </div>
    );
  } else {
    return (
      <div>
        <h1>No token found, please log in</h1>
      </div>
    );
  }
}
export default Home 