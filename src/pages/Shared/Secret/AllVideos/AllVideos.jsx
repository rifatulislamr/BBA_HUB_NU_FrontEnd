import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';

const AllVideos = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        getAllVideos()
    }, [])

    const baseUrl = 'http://localhost:5000';
    const getAllVideos = () => {
        axios.get('http://localhost:5000/videos/all')
            .then(result => {
                setVideos(result.data);
                console.log(result.data)
            })
            .catch(error => {
                setVideos([]);
                console.log(error);
                alert("Error happened")
            })
    }

    return (
        <div>
           
            <SectionTitle heading='All videos'></SectionTitle>
            <div className="grid md:grid-cols-3 gap-10">
            {
                videos.map(files => {
                    return (
                        <div>
                            <h1 className='uppercase text-center mb-2 bg-slate-700 rounded-3xl text-green-500'>{files.name}</h1>
                            {
                                files.videos.map(file => {
                                    console.log(file)
                                    return (
                                        <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                                            <video controls width='600' height='280'>
                                                <source src={`${baseUrl}${file}`} type="video/mp4" />
                                                <source src={`${baseUrl}${file}`} type="video/x-matroska" />
                                            </video>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )

                })
            }
            </div>
        </div>
    );
};

export default AllVideos;
