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




// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import SectionTitle from '../../../../components/SectionTitle/SectionTitle';

// const AllVideos = () => {
//     const [videos, setVideos] = useState([]);
//     const [selectedCategory, setSelectedCategory] = useState('');

//     useEffect(() => {
//         getAllVideos();
//     }, []);

//     const baseUrl = 'http://localhost:5000';

//     const getAllVideos = () => {
//         axios.get('http://localhost:5000/videos/all')
//             .then(result => {
//                 setVideos(result.data);
//                 console.log(result.data);
//             })
//             .catch(error => {
//                 setVideos([]);
//                 console.log(error);
//                 alert("Error happened");
//             });
//     };

//     return (
//         <div>
//             <SectionTitle heading='All videos'></SectionTitle>
//             <select
//                 value={selectedCategory}
//                 onChange={(e) => setSelectedCategory(e.target.value)}
//             >
//                 <option value="">All Categories</option>
//                 <option value="C_A_IT">computer and information technology</option>
//                 <option value="category2">Category 2</option>
//                 {/* Add more options for other categories */}
//             </select>
//             <div className="grid md:grid-cols-3 gap-10">
//                 {
//                     videos.map(category => {
//                         if (selectedCategory === '' || selectedCategory === category.name) {
//                             return (
//                                 <div key={category.name}>
//                                     <h1 className='uppercase text-center mb-2 bg-slate-700 rounded-3xl text-green-500'>{category.name}</h1>
//                                     {
//                                         category.videos.map(file => {
//                                             console.log(file);
//                                             return (
//                                                 <div key={file} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
//                                                     <video controls controlsList="nodownload" width='600' height='280'>
//                                                         <source src={`${baseUrl}${file}`} type="video/mp4" />
//                                                         <source src={`${baseUrl}${file}`} type="video/x-matroska" />
//                                                     </video>
//                                                 </div>
//                                             );
//                                         })
//                                     }
//                                 </div>
//                             );
//                         } else {
//                             return null;
//                         }
//                     })
//                 }
//             </div>
//         </div>
//     );
// };

// export default AllVideos;



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';

const AllVideos = () => {
    const [videos, setVideos] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        getAllVideos();
    }, []);

    const baseUrl = 'http://localhost:5000';

    const getAllVideos = () => {
        axios.get('http://localhost:5000/videos/all')
            .then(result => {
                setVideos(result.data);
                console.log(result.data);
            })
            .catch(error => {
                setVideos([]);
                console.log(error);
                alert("Error happened");
            });
    };

    // Filter videos by selected category
    const filteredVideos = videos.filter(category => {
        return selectedCategory === '' || selectedCategory === category.name;
    });

    return (
        <div>
            <SectionTitle heading='All videos'></SectionTitle>
            <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
            >
                <option value="">All Categories</option>
                <option value="C_A_IT">computer and information technology</option>
                <option value="BUSINESS STATISTICS">BUSINESS STATISTICS </option>
                <option value="MICRO ECONOMICS">MICRO ECONOMICS</option>
                <option value="BUSINESS COMMUNICATION">BUSINESS COMMUNICATION</option>
                <option value="TAXATION IN BANGLADESH">TAXATION IN BANGLADESH</option>
                <option value="BUSINESS MATHEMATICS">BUSINESS MATHEMATICS</option>
                <option value="INTERMEDIATE ACCOUNTING">INTERMEDIATE ACCOUNTING</option>

                {/* Add more options for other categories */}
            </select>
            <div className="grid md:grid-cols-3 gap-10">
                {
                    filteredVideos.map(category => (
                        <div key={category.name}>
                            <h1 className='uppercase text-center mb-2 bg-slate-700 rounded-3xl text-green-500'>{category.name}</h1>
                            {
                                category.videos.map(file => (
                                    <div key={file} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                        <video controls controlsList="nodownload" width='600' height='280'>
                                            <source src={`${baseUrl}${file}`} type="video/mp4" />
                                            <source src={`${baseUrl}${file}`} type="video/x-matroska" />
                                        </video>
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default AllVideos;







