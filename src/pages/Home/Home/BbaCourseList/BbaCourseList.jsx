import React from 'react';
import BbaCourseListView from './BbaCourseListView';
import useCourse from '../../../../hooks/useHooks';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import { Link } from 'react-router-dom';
import './BbaCourseList.css'

const BbaCourseList = () => {
    const [menu] = useCourse();
    const firstYearBBA = menu.filter(item => item.category === 'firstYearBBA');

    return (
        <section className="mb-12">
            <SectionTitle
                heading="bba first year courses"
                subHeading="Buy and get success"
            ></SectionTitle>
            <div className='flex justify-center'>
                <h1 className='text-center text-red-600 text-4xl font-bold bounce-zoom-animation bg-yellow-500 rounded-full max-w-fit p-2 md:w-1/2 lg:w-1/3 '><span className='text-4xl font-bold bounce-zoom-animation'>Get 50% discount</span> purchase full course</h1>
            </div>
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