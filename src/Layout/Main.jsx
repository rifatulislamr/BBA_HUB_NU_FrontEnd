import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/NavBar/NavBar";



const Main = () => {
    // const location = useLocation();
    // const noHeader = location.pathname.includes('login') || location.pathname.includes('signUp');

    return (
        <div>
           {/* { noHeader || <NavBar></NavBar>}
           
           { noHeaderFooter|| <Footer></Footer>} */}
         
           <NavBar></NavBar>
          
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;