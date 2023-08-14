import { Helmet } from "react-helmet-async";
import Testimonials from "../../Home/Testimonials/Testimonials";
import { useEffect } from "react";
import CoverPageShare from "../CoverPageShare/CoverPageShare";
import allClassImg from '../../../assets/menu/banner3.jpg'
import AllVideos from "./AllVideos/AllVideos";




const Secret = () => {
    useEffect(() => {
        // Scroll to the top-left corner (0,0) when the HomePage component is mounted
        window.scrollTo(0, 0);
      }, []);
    return (
        <>
            <Helmet>
                <title>BBA HUB | All Classes </title>
            </Helmet>
            <CoverPageShare img={allClassImg} title= "All Classes" ></CoverPageShare>
            <AllVideos></AllVideos>
            <Testimonials></Testimonials>
        </>

    );
};

export default Secret;