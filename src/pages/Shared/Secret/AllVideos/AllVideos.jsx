import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
        <div style={{ background: "white" }}>
            <h1>This is from videos</h1>
            {
                videos.map(files => {
                    return (
                        <div>
                            <h1>{files.name}</h1>
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
    );
};

export default AllVideos;
{/* <video preload='auto' width='320' height='240' >
                    <source src={`${baseUrl}${file}`} />
                    your browser does not support the video tag.
                    </video>  */}