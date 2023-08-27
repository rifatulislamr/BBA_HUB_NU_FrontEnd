// import SectionTitle from "../../../components/SectionTitle/SectionTitle";
// import featuredImg from '../../../assets/home/fe.jpg';
// import './Featured.css';


// const Featured = () => {
//     return (
//         <div className="featured-item bg-fixed text-white pt-8 my-20">
//             <SectionTitle subHeading="check it out" heading="Featured Item" ></SectionTitle>
//             <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36">
//                 <div>
//                     <img className="rounded-xl" src={featuredImg} alt="" />
//                 </div>
//                 <div className="md:ml-10">
//                     <p>Aug 20, 2023</p>
//                     <p className="uppercase">Why we are the first choice of students and parents?</p>
//                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate expedita hic dolorem, iusto vel suscipit nam excepturi debitis magnam nostrum! Ut eum dignissimos culpa doloremque eligendi consectetur blanditiis laboriosam fugiat ea quia similique quam nisi reprehenderit numquam magnam nemo vitae cupiditate, atque maiores dicta minus pariatur. Perspiciatis nobis vero quas?</p>
//                     {/* <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button> */}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Featured;

import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/fe.jpg';
import './Featured.css';

const Featured = () => {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {

        const updateDateTime = () => {
            setCurrentDateTime(new Date());
        };


        const timer = setInterval(updateDateTime, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);


    const formattedDateTime = currentDateTime.toLocaleString('en-bd', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        // hour: 'numeric',
        // minute: 'numeric',
        // second: 'numeric'
    });
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle
                heading="Featured Item" >
            </SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-6 md:px-10 lg:px-16">
                <div className="md:w-1/2 lg:w-2/3 mb-6 md:mb-0">
                    <img className="rounded-xl w-full" src={featuredImg} alt="" />
                </div>
                <div className="md:w-1/2 lg:w-1/3 md:ml-6">
                    <p className="text-sm md:text-base">{formattedDateTime}</p> 
                    
                    
                    <p className="uppercase text-lg md:text-xl font-semibold mt-2 md:mt-4">Why we are the first choice of students and parents?</p>
                    <p className="text-sm md:text-base mt-2 md:mt-4"></p>
                </div>
            </div>
        </div>
    );
};

export default Featured;




