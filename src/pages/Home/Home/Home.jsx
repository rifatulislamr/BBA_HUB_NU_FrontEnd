import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import CourseCategory from "../CourseCategory/CourseCategory";
import Featured from "../Featured/Featured";
import Testimonials from "../Testimonials/Testimonials";
import './Home.css'
import { useEffect } from "react";

const Home = () => {
    useEffect(() => {
        // Scroll to the top-left corner (0,0) when the HomePage component is mounted
        window.scrollTo(0, 0);
      }, []);
    
    
    return (
        <div className="position">
            <Helmet>
                <title>BBA HUB | Home </title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <CourseCategory></CourseCategory>
            {/* <PopularMenu></PopularMenu> */}
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
    
};

export default Home;