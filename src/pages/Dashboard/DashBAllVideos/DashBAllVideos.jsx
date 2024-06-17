import React, { useEffect, useState } from "react";
import axios from "axios";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const DashBAllVideos = () => {
  const [axiosSecure] = useAxiosSecure();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getAllVideos();
  }, []);

  const baseUrl = "http://localhost:5000";

  const getAllVideos = () => {
    axios
      .get("http://localhost:5000/videos/all")
      .then((result) => {
        setVideos(result.data);
      })
      .catch((error) => {
        setVideos([]);
        console.log(error);
        alert("An error occurred while fetching videos.");
      });
  };

  const handleDelete = (videoDetails) => {
    axiosSecure
      .delete(`/videos/${videoDetails._id}`)
      .then((res) => res.data)
      .then((data) => {
        if (data.deletedCount) {
          getAllVideos();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${videoDetails.name} has been deleted.`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Error happened");
      });
  };
  return (
    <div>
      <SectionTitle heading="All videos" />
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>#</th>
              <th>Category</th>
              <th>Course Name</th>
              <th>Video Name</th>
              <th>Video</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody className="text-md lowercase">
            {videos.map((files, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{files.category}</td>
                <td>{files.courseName}</td>
                <td>{files.name}</td>
                <td>
                  {files.videos.map((file, innerIndex) => (
                    <video key={innerIndex} controls width="320" height="240">
                      <source src={`${baseUrl}${file}`} type="video/mp4" />
                      <source
                        src={`${baseUrl}${file}`}
                        type="video/x-matroska"
                      />
                    </video>
                  ))}
                </td>
                <td>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded"
                    onClick={() => handleDelete(files)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashBAllVideos;

// import React, { useEffect, useState } from 'react';

// import axios from 'axios';
// import SectionTitle from '../../../components/SectionTitle/SectionTitle';

// const DashBAllVideos = () => {
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
//             <div className="grid md:grid-cols-4 gap-10">
//             {
//                 videos.map(files => {
//                     return (
//                         <div>

//                             <h1 className='uppercase text-center mb-2 bg-slate-700 rounded-3xl text-green-500'>{files.name}</h1>

//                             {
//                                 files.videos.map(file => {
//                                     console.log(file)
//                                     return (
//                                         <div style={{display:"flex", justifyContent:"center", alignItems:"center", margin:'10px'}}>
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

// export default DashBAllVideos;

// // const DashBAllVideos = () => {
// //     return (
// //         <div>
// //            <SectionTitle heading="All Video"></SectionTitle>
// //         </div>
// //     );
// // };

// // export default DashBAllVideos;
