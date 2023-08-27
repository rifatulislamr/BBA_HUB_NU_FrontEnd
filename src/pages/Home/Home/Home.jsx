import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import CourseCategory from "../CourseCategory/CourseCategory";
import Featured from "../Featured/Featured";
import Testimonials from "../Testimonials/Testimonials";
import './Home.css'
import { useEffect } from "react";
import BbaCourseList from "./BbaCourseList/BbaCourseList";
import BbaCourseList2 from "./BbaCourseList/BbaCourseList2";
import FAQ from "../FAQ/FAQ";
import DemoVideo from "./DemoVideo/DemoVideo";

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
            <DemoVideo></DemoVideo>
            {/* <CourseCategory></CourseCategory> */}
             <BbaCourseList></BbaCourseList>
             <BbaCourseList2></BbaCourseList2>
            {/* <PopularMenu></PopularMenu> */}
            <Featured></Featured>
            <FAQ></FAQ>
            <Testimonials></Testimonials>
        </div>
    );
    
};

export default Home;