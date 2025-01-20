import { useLocation } from "react-router-dom";
import MainPage from "./FrontEndComponents/MainContent";
import NavbarMain from "./FrontEndComponents/Navbar";
function Home(){
    const location = useLocation()
    const user = location.state?.user
    console.log(user)
    return(
        <div>
            <NavbarMain/>
            <h1>Home page, welcome {user?.email}</h1>
            <MainPage/>
        </div>
    )
   
}
export default Home;