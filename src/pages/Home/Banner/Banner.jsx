
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from '../../../assets/home/01.jpg';
import img2 from '../../../assets/home/02.jpg';
import img3 from '../../../assets/home/03.jpg'
import img4 from '../../../assets/home/10.jpg';
import './Banner.css'

const Banner = () => {
    return (
        <Carousel
            showArrows={true} // Added arrows for navigation
            emulateTouch={true} // Emulate touch behavior on desktop
            infiniteLoop={true} // Infinite looping through images
            showThumbs={false} // Disabled thumbnail navigation
            autoPlay={true} // Auto play the carousel
            interval={4000} // Interval between slides in milliseconds
            transitionTime={500} // Transition time in milliseconds
            swipeScrollTolerance={50} // Swipe scroll tolerance in pixels
        >
            <div className='image-container'>
                <img className='BbaHubBanner' src={img1} loading="lazy" alt="Banner 1" />
            </div>
            <div className='image-container'>
                <img className='BbaHubBanner' src={img2} loading="lazy" alt="Banner 2" />
            </div>
            <div className='image-container'>
                <img className='BbaHubBanner' src={img3} loading="lazy" alt="Banner 3" />
            </div>
            <div className='image-container'>
                <img className='BbaHubBanner' src={img4} loading="lazy" alt="Banner 4" />
            </div>
        </Carousel>
    );
};

export default Banner;


