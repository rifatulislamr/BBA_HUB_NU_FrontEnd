import React from 'react';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';

const DemoVideo = () => {
    return (
        <div>
            <SectionTitle
                heading='What is in the online batch throughout the year?'
            ></SectionTitle>
            <h1 className='text-center text-xl m-6 uppercase italic text-slate-100'>May the progress of education continue from any part of the country under the care of the best teachers</h1>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mx-4 md:mx-10 lg:mx-20">
                <div className="card bg-base-100 shadow-xl">
                    <figure>
                        <iframe width="480" height="200" src="https://www.youtube.com/embed/JMj8_KRR8ag?si=mKIEYv8BUpiv4iIc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">
                            Core Concepts Of Marketing
                        </h2>
                        <p></p>
                        <div className="card-actions"></div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure>
                        <iframe width="480" height="200" src="https://www.youtube.com/embed/ElZfdU54Cp8?si=TzXRTBZDMm3AVbCH" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen={true}></iframe>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">
                            Core Concepts Of Marketing
                        </h2>
                        <p></p>
                        <div className="card-actions"></div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure>
                        <iframe width="480" height="200" src="https://www.youtube.com/embed/8NQRjKTkXXY?si=nAZEx-9qbPsvdYu5" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen={true}></iframe>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">
                            Core Concepts Of Marketing
                        </h2>
                        <p></p>
                        <div className="card-actions"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DemoVideo;
