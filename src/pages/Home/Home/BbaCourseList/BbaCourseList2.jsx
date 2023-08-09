import React from 'react';
import BbaCourseListView2 from './BbaCourseListView2';
import useCourse from '../../../../hooks/useHooks';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import { Link } from 'react-router-dom';

const BbaCourseList2 = () => {
    const [menu] = useCourse();
    const secondYearBBA = menu.filter(item => item.category === 'secondYearBBA');

    return (
        <section className="mb-12">
            <SectionTitle
                heading="bba second year courses"
                subHeading="Buy and get success"
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {

                    secondYearBBA.map(item => <BbaCourseListView2
                        key={item._id}
                        item={item}

                    >

                    </BbaCourseListView2>)
                }
            </div >
            <Link to='/course'> <button className="btn btn-outline border-0 border-b-4 mt-4 ">View Full course</button></Link>
        </section>
    );
};

export default BbaCourseList2;