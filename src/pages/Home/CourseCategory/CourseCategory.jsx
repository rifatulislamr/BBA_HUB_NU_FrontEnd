import SectionTitle from "../../../components/SectionTitle/SectionTitle"
import CourseITem from "../../Shared/CourseITem/CourseITem";
import useCourse from "../../../hooks/useHooks";
import { Link } from "react-router-dom";

const CourseCategory = () => {
    const [menu] = useCourse();
    const popular = menu.filter(item => item.category === 'popular');

    return (
        <section className="mb-12">
            <SectionTitle
                heading="course category"
                subHeading="Buy and get success"
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    
                    popular.map(item => <CourseITem
                        key={item._id}
                        item={item}
                    
                    >

                    </CourseITem>)
                }
            </div >
           <Link to='/course'> <button className="btn btn-outline border-0 border-b-4 mt-4 ">View Full course</button></Link>
        </section>
    );
            }

export default CourseCategory;