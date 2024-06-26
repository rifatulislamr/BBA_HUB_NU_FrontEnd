import { Helmet } from "react-helmet-async";
import CoverPageShare from "../Shared/CoverPageShare/CoverPageShare";
import aboutImg from './../../assets/menu/banner3.jpg'

import { useEffect } from "react";
import TPanel from "./AboutCompo/TPanel";
import Category from "../Home/Category/Category";
import ResetPassword from "../Login/ResetPassword";


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
            
            <Category></Category>
            <TPanel></TPanel>
           
        </div>
    );
};

export default About;