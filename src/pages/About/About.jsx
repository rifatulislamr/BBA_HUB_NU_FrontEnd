import { Helmet } from "react-helmet-async";
import CoverPageShare from "../Shared/CoverPageShare/CoverPageShare";
import aboutImg from './../../assets/menu/banner3.jpg'
import Testimonials from "../Home/Testimonials/Testimonials";
import Footer from "../Shared/Footer/Footer";
import { useEffect } from "react";


const About = () => {
    useEffect(() => {
        // Scroll to the top-left corner (0,0) when the HomePage component is mounted
        window.scrollTo(0, 0);
      }, []);

    return (
        <div>
            <Helmet>
                <title>BBA HUB | About Us </title>
            </Helmet>
            <CoverPageShare img={aboutImg} title= "About us" ></CoverPageShare>
           
        </div>
    );
};

export default About;