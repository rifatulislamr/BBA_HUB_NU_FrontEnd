import CourseDetails from '../CourseDetails/CourseDetails';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

const CourseDetailsTab = ({ items }) => {

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };

    return (
        <div >


            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>

                    <div className="grid md:grid-cols-3 gap-10  p-4  ">
                        {
                            items.map(item => <CourseDetails
                                key={item._id}
                                item={item}


                            ></CourseDetails>)

                        }
                    </div>

                </SwiperSlide>

            </Swiper>

        </div>

    );
};

export default CourseDetailsTab;