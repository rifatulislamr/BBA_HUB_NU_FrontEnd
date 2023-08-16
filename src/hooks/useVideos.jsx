import React from 'react';

const useVideos = () => {
   const [videos, setVideos] = useState([]);
   useEffect(() => {
            fetch('http://localhost:5000/videos')
          
                .then(res => res.json())
                .then(data => {
                    setVideos(data);
                    setLoading(false);
                });
    
               
        }, [])
        return [videos]
};

export default useVideos;

// const [menu, setMenu] = useState([]);
//     const [loading, setLoading] = useState(true);
//     useEffect(() => {
//         fetch('http://localhost:5000/Courses')
//             .then(res => res.json())
//             .then(data => {
//                 setMenu(data);
//                 setLoading(false);
//             });

           
//     }, [])
//     return [menu, loading]

// }