import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import './Category.css'

import "swiper/css";
import "swiper/css/pagination";

import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
    return (
        <section>
            <SectionTitle 
          
            heading={"Popular Courses"}
            ></SectionTitle>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                centeredSlides={false}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24 "
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h3 className="text-2xl  text-center -mt-2  backdrop-blur-xl">Computer  & Information Technology</h3>
                </SwiperSlide>
                
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h3 className="text-2xl  text-center -mt-2   backdrop-blur-xl  ">Business  Statistics</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h3 className="text-2xl  text-center -mt-2   backdrop-blur-xl  ">Micro Economics</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h3 className="text-2xl  text-center -mt-2   backdrop-blur-xl  ">Business Communication</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h3 className="text-2xl  text-center -mt-2   backdrop-blur-xl  ">Taxation in Bangladesh</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h3 className="text-2xl  text-center -mt-2   backdrop-blur-xl  ">Business Mathematics</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h3 className="text-2xl  text-center -mt-2   backdrop-blur-xl  ">Intermediate Accounting</h3>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;


