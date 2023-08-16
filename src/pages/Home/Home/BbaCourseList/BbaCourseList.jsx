import React from 'react';
import BbaCourseListView from './BbaCourseListView';
import useCourse from '../../../../hooks/useHooks';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import { Link } from 'react-router-dom';

const BbaCourseList = () => {
    const [menu] = useCourse();
    const firstYearBBA = menu.filter(item => item.category === 'firstYearBBA');

    return (
        <section className="mb-12">
            <SectionTitle
                heading="bba first year courses"
                subHeading="Buy and get success"
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {

                    firstYearBBA.map(item => <BbaCourseListView
                        key={item._id}
                        item={item}

                    >

                    </BbaCourseListView>)
                }
            </div >
           <div className='text-center mt-4'>
           <Link to='/course'> <button className="btn btn-outline border-0 border-b-4 mt-4 bg-blue-800  ">View Full course</button></Link>
           </div>
        </section>
    );
};

export default BbaCourseList;