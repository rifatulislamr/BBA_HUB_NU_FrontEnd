import { Helmet } from "react-helmet-async";
import CoverPageShare from "../../Shared/CoverPageShare/CoverPageShare";
import courseImg from '../../../assets/menu/banner3.jpg';
import useCourse from "../../../hooks/useHooks";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import CourseList from "../CourseList/CourseList";
import { useEffect } from "react";

const Course = () => {
    useEffect(() => {
        // Scroll to the top-left corner (0,0) when the HomePage component is mounted
        window.scrollTo(0, 0);
      }, []);

    const [menu] = useCourse();
    
    
    const degree = menu.filter(item => item.category === 'degree');
    const bba = menu.filter(item => item.category === 'bba');
    const mba = menu.filter(item => item.category === 'mba');

    return (
        <div>
            <Helmet>
                <title>BBA HUB | Course </title>
            </Helmet>
            <CoverPageShare img={courseImg} title= "Courses" ></CoverPageShare>
            <SectionTitle subHeading="buy and get success" heading="bba course"></SectionTitle>
            <CourseList items = {bba}></CourseList>

            <SectionTitle subHeading="buy and get success" heading="mba course"></SectionTitle>
            <CourseList items = {mba}></CourseList>

            <SectionTitle subHeading="buy and get success" heading="degree course"></SectionTitle>
            <CourseList items = {degree}></CourseList>
           
           

        </div>
    );
};

export default Course;