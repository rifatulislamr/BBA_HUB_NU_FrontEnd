import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from '../../../assets/home/01.jpg';
// import img2 from '../../../assets/home/02.jpg';
// import img3 from '../../../assets/home/03.jpg'
import img4 from '../../../assets/home/10.jpg';
import './Banner.css'

const Banner = () => {
    return (
        <Carousel>
            <div className='image-container'>
                <img className='BbaHubBanner' src={img1} />
            </div>
            {/* <div className='image-container'>
                <img className='BbaHubBanner' src={img2} />
            </div >
            <div className='image-container'>
                <img className='BbaHubBanner' src={img3} />
            </div > */}
            <div className='image-container'>
                <img className='BbaHubBanner' src={img4} />
            </div>
            
        </Carousel>
    );
};

export default Banner;