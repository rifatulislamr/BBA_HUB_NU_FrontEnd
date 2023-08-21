import { useEffect, useState } from "react";


const useVideos = () => {
   const [videos, setVideos] = useState([]);
   const [loading, setLoading] = useState(true);
   useEffect(() => {
            fetch('http://localhost:5000/videos')
            
          
                .then(res => res.json())
                .then(data => {
                    setVideos(data);
                    setLoading(false);
                });
    
               
        }, [])
        return [videos, loading]
};

export default useVideos;

// import { useEffect, useState } from "react";

// const useVideo = (category) => {
//     const [videos, setVideos] = useState([]);
//     const [loading, setLoading] = useState(true);
    
//     useEffect(() => {
//         const fetchVideos = async () => {
//             try {
//                 const response = await fetch(`http://localhost:5000/Videos?category=${category}`);
//                 const data = await response.json();
//                 setVideos(data);
//                 setLoading(false);
//             } catch (error) {
//                 console.error("Error fetching videos:", error);
//                 setLoading(false);
//             }
//         };

//         fetchVideos();
//     }, [category]);

//     return [videos, loading];
// }

// export default useVideo;
