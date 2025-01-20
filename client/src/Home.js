import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MainPage from "./FrontEndComponents/MainContent";
import NavbarMain from "./FrontEndComponents/Navbar";

function Home() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            const token = localStorage.getItem("token");

            if (!token) {
                alert("No active session. Please log in.");
                navigate("/login");
                return;
            }

            try {
                const response = await axios.get("http://localhost:3001/home", {
                    headers: { token },
                });
                setUser(response.data); // Set user data from the response
            } catch (error) {
                console.error("Error validating token:", error.response?.data || error.message);
                alert("Session expired or invalid. Please log in again.");
                localStorage.removeItem("token"); // Clear invalid token
                navigate("/login"); // Redirect to login
            }
        };

        fetchUserData();
    }, [navigate]);

    if (!user) {
        return <div>Loading...</div>; // Show a loading state while fetching user data
    }

    return (
        <div>
            <NavbarMain />
            <h2>Home page, welcome {user.name}</h2>
            <MainPage />
        </div>
    );
}

export default Home;
