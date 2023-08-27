// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import SectionTitle from '../../../../components/SectionTitle/SectionTitle';

// const AllVideos = () => {
//     const [videos, setVideos] = useState([]);

//     useEffect(() => {
//         getAllVideos()
//     }, [])

//     const baseUrl = 'http://localhost:5000';
//     const getAllVideos = () => {
//         axios.get('http://localhost:5000/videos/all')
//             .then(result => {
//                 setVideos(result.data);
//                 console.log(result.data)
//             })
//             .catch(error => {
//                 setVideos([]);
//                 console.log(error);
//                 alert("Error happened")
//             })
//     }

//     return (
//         <div>

//             <SectionTitle heading='All videos'></SectionTitle>
//             <div className="grid md:grid-cols-3 gap-10">
//             {
//                 videos.map(files => {
//                     return (
//                         <div>
//                             <h1 className='uppercase text-center mb-2 bg-slate-700 rounded-3xl text-green-500'>{files.name}</h1>
//                             {
//                                 files.videos.map(file => {
//                                     console.log(file)
//                                     return (
//                                         <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
//                                             <video controls width='600' height='280'>
//                                                 <source src={`${baseUrl}${file}`} type="video/mp4" />
//                                                 <source src={`${baseUrl}${file}`} type="video/x-matroska" />
//                                             </video>
//                                         </div>
//                                     )
//                                 })
//                             }
//                         </div>
//                     )

//                 })
//             }
//             </div>
//         </div>
//     );
// };

// export default AllVideos;

//two 

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
// import './AllVideos.css';

// const AllVideos = () => {
//     const [videos, setVideos] = useState([]);

//     useEffect(() => {
//         getAllVideos()
//     }, [])

//     const baseUrl = 'http://localhost:5000';
//     const getAllVideos = () => {
//         axios.get('http://localhost:5000/videos/all')

//             .then(result => {
//                 setVideos(result.data);
//                 console.log(result.data)
//             })
//             .catch(error => {
//                 setVideos([]);
//                 console.log(error);
//                 alert("Error happened")
//             })
//     }

//     return (
//         <div>
//             <SectionTitle heading='All videos'></SectionTitle>
//             <div className="grid md:grid-cols-3 gap-10">
//             {
//                 videos.map(files => {
//                     return (
//                         <div key={files.name}>
//                             <h1 className='uppercase text-center mb-2 bg-slate-700 rounded-3xl text-green-500'>{files.name}</h1>
//                             {
//                                 files.videos.map(file => {
//                                     console.log(file)
//                                     return (
//                                         <div key={file} style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
//                                             <video controls controlsList="nodownload" width='600' height='280'>
//                                                 <source src={`${baseUrl}${file}`} type="video/mp4" />
//                                                 <source src={`${baseUrl}${file}`} type="video/x-matroska" />
//                                             </video>
//                                         </div>
//                                     )
//                                 })
//                             }
//                         </div>
//                     )

//                 })
//             }
//             </div>
//         </div>
//     );
// };

// export default AllVideos;

import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import './AllVideos.css';
import { AuthContext } from '../../../../providers/AuthProvider';

const AllVideos = () => {
  const { user } = useContext(AuthContext);
  const [videos, setVideos] = useState([]);
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    getAllVideos();
    getUserInfo();
  }, []);

  const baseUrl = 'http://localhost:5000';

  const getAllVideos = () => {
    axios.get(`${baseUrl}/videos/all`)
      .then(result => {
        setVideos(result.data);
      })
      .catch(error => {
        setVideos([]);
        console.log(error);
        alert("An error occurred while fetching videos.");
      });
  }

  const getUserInfo = () => {
    const userEmail = { email: user.email };
    fetch(`${baseUrl}/users/userDetails`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userEmail)
    })
      .then((res) => res.json())
      .then(res => {
        setUserInfo(res);
      })
      .catch(err => {
        console.log(err);
        alert("An error occurred while fetching user information.");
      });
  }

  const handleVideoResolutionChange = (e) => {
    const selectedResolution = e.target.value;
    const video = document.querySelector('video');
    video.setAttribute('src', `${baseUrl}${video.src}?resolution=${selectedResolution}`);
  };

  return (
    <div>
      <SectionTitle heading='All videos'></SectionTitle>
      <div className="grid md:grid-cols-3 gap-10">
        {
          userInfo.courses && userInfo.courses.length === 0 ? (
            <div>
              <p style={{textAlign:"center", fontSize:"24px",marginTop:"24px"}}>No courses available</p>
            </div>
          ) : (
            videos.map(files => {
              if (userInfo.courses && userInfo.courses.includes(files.category)) {
                return (
                  <div key={files.name}>
                    <h1 className='uppercase text-center mb-2 bg-slate-700 rounded-3xl text-green-500'>{files.name}</h1>
                    {
                      files.videos.map(file => (
                        <div key={file} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                          <video controls controlsList="nodownload" width='640' height='390'>
                            <source src={`${baseUrl}${file}`} type="video/mp4" />
                            <source src={`${baseUrl}${file}`} type="video/x-matroska" />
                            <select onChange={handleVideoResolutionChange}>
                              <option value="480p">480p</option>
                              <option value="720p">720p</option>
                              <option value="1080p">1080p</option>
                            </select>
                          </video>
                        </div>
                      ))
                    }
                  </div>
                );
              } else {
                return null;
              }
            })
          )
        }
      </div>
    </div>
  );
};

export default AllVideos;























 












