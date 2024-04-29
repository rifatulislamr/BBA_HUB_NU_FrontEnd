// import React, { useContext, useEffect, useState } from 'react';
// import axios from 'axios';
// import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
// import './AllVideos.css';
// import { AuthContext } from '../../../../providers/AuthProvider';

// const AllVideos = () => {
//   const { user } = useContext(AuthContext);
//   const [videos, setVideos] = useState([]);
//   const [userInfo, setUserInfo] = useState({});
//   const  email = user?.email;

//   const getUserCart = async () => {
//     try {
//       const response = await axios.get(`${baseUrl}/carts/videos?email=${email}`);
//       setVideos(response.data);
//       console.log(response.data);
//     } catch (error) {
//       console.error(error);
//       alert("An error occurred while fetching user's cart and videos.");
//     }
//   };

//   useEffect(() => {
//     getUserCart();
//     // getUserInfo();
//   }, []);



//   const baseUrl = 'http://localhost:5000';





//   // const getAllVideos = () => {
//   //   axios.get(`${baseUrl}/videos/courses`)
//   //     .then(result => {
//   //       setVideos(result.data);
//   //     })
//   //     .catch(error => {
//   //       setVideos([]);
//   //       console.log(error);
//   //       alert("An error occurred while fetching videos.");
//   //     });
//   // }

//   // const getUserInfo = () => {
//   //   const userEmail = { email: user.email };
//   //   fetch(`${baseUrl}/users/userDetails`, {
//   //     method: 'POST',
//   //     headers: {
//   //       'Content-Type': 'application/json'
//   //     },
//   //     body: JSON.stringify(userEmail)
//   //   })
//   //     .then((res) => res.json())
//   //     .then(res => {
//   //       setUserInfo(res);
//   //     })
//   //     .catch(err => {
//   //       console.log(err);
//   //       alert("An error occurred while fetching user information.");
//   //     });
//   // }

//   const handleVideoResolutionChange = (e) => {
//     const selectedResolution = e.target.value;
//     const video = document.querySelector('video');
//     video.setAttribute('src', `${baseUrl}${video.src}?resolution=${selectedResolution}`);
//   };

//   return (
//     <div>
//       <SectionTitle heading='All videos'></SectionTitle>
//       <div className="grid md:grid-cols-3 gap-10">
      
//         {
//           userInfo.courses && userInfo.courses.length === 0 ? (
//             <div>
//               <p style={{textAlign:"center", fontSize:"24px",marginTop:"24px"}}>No courses available</p>
//             </div>
//           ) : (
//             videos.map(files => {
              
//                 return (
//                   <div key={files.name}>
//                     <h1 className='uppercase text-center mb-2 bg-slate-700 rounded-3xl text-green-500'>{files.name}</h1>
//                     {
//                       files.videos.map(file => (
//                         <div key={file} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
//                           <video controls controlsList="nodownload" width='640' height='390'>
//                             <source src={`${baseUrl}${file}`} type="video/mp4" />
//                             <source src={`${baseUrl}${file}`} type="video/x-matroska" />
//                             <select onChange={handleVideoResolutionChange}>
//                               <option value="480p">480p</option>
//                               <option value="720p">720p</option>
//                               <option value="1080p">1080p</option>
//                             </select>
//                           </video>
//                         </div>
//                       ))
//                     }
//                   </div>
//                 );
             
//             })
//           )
//         }
//       </div>
//     </div>
//   );
// };

// export default AllVideos;



import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import './AllVideos.css';
import { AuthContext } from '../../../../providers/AuthProvider';

const ResponsiveVideoGallery = () => {
  const { user } = useContext(AuthContext);
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const email = user?.email;
  const baseUrl = 'http://localhost:5000';

  const getUserCart = async () => {
    try {
      const response = await axios.get(`${baseUrl}/carts/videos?email=${email}`);
      setVideos(response.data);
    } catch (error) {
      console.error(error);
      alert("An error occurred while fetching user's cart and videos.");
    }
  };

  useEffect(() => {
    getUserCart();
  }, []);

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className="video-gallery">
      <div className="video-list">
        {videos.map((files) => (
          <div
            key={files.name}
            className={`video-item ${selectedVideo === files.videos[0] ? 'selected' : ''}`}
            onClick={() => handleVideoClick(files.videos[0])}
          >
            {/* <div className="video-thumbnail">
              <img src={`${baseUrl}${files.videos[0]}`} alt={files.name} />
            </div> */}
            <div className="video-info">
            <h2 className="video-category">{files.courseName}</h2>
              <h2 className="video-title">{files.name}</h2>
              <p className="video-description">{/* Add video description here */}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="selected-video-container" key={selectedVideo}>
        {selectedVideo && (
          <>
            <h1 className="selected-video-title">This is Your Courses</h1>
            <div className="selected-video-player">
              <video controls controlsList="nodownload" width="720" height="420">
                <source src={`${baseUrl}${selectedVideo}`} type="video/mp4" />
                <source src={`${baseUrl}${selectedVideo}`} type="video/x-matroska" />
              </video>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ResponsiveVideoGallery;







