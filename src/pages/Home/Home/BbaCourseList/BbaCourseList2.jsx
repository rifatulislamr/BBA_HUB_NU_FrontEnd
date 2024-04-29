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
             <div className='flex justify-center'>
            <h1 className='text-center text-red-600 text-4xl font-bold bounce-zoom-animation bg-yellow-500 rounded-full max-w-max p-2'><span className='text-4xl font-bold bounce-zoom-animation'>Get 50% discount</span> purchase full course</h1>
            </div>
            <div className="grid md:grid-cols-2 gap-10">
                {

                    secondYearBBA.map(item => <BbaCourseListView2
                        key={item._id}
                        item={item}

                    >

                    </BbaCourseListView2>)
                }
            </div >
            <div className='text-center mt-4'>
           <Link to='/course'> <button className="btn btn-outline border-0 border-b-4 mt-4 bg-blue-800  ">View Full course</button></Link>
           </div>
        </section>
    );
};

export default BbaCourseList2;