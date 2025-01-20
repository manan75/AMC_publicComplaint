import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MainPage from "./FrontEndComponents/MainContent";
import NavbarMain from "./FrontEndComponents/Navbar";

function Home() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            // Redirect to login if no token is found
            alert("No active session. Please log in.");
            navigate("/login");
            return;
        }

        // Validate the token and fetch user information
        axios
            .get("http://localhost:3000/home", {
                headers: { token },
            })
            .then((response) => {
                setUser(response.data);
            })
            .catch((error) => {
                console.error("Error validating token:", error);
                alert("Session expired or invalid. Please log in again.");
                localStorage.removeItem("token"); // Clear invalid token
                navigate("/login"); // Redirect to login
            });
    }, [navigate]);

    if (!user) {
        // Show a loading state while fetching user data
        return <div>Loading...</div>;
    }

    return (
        <div>
            <NavbarMain />
            <h1>Home page, welcome {user.email}</h1>
            <MainPage />
        </div>
    );
}

export default Home;
