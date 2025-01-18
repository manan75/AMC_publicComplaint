import { useLocation } from "react-router-dom";
import NavbarMain from "./FrontEndComponents/Navbar";
function Home(){
    const location = useLocation()
    const user = location.state?.user
    console.log(user)
    return(
        <div>
            <NavbarMain/>
            <h1>Home page, welcome {user?.email}</h1>
        </div>
    )
   
}
export default Home;