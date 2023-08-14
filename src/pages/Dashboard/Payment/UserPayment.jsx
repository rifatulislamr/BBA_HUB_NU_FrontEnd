import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import React, { useState } from 'react';
import axios from 'axios';

const   UserPayment = () => {
     
const [name,setName] = useState("");
const [videos,setVideos] = useState([]);

const handleSubmit=(e)=>{
    e.preventDefault();

    let formData = new FormData();
    for(let key in videos){
        formData.append("videos", videos[key]);
    }

    formData.append("name",name);

    axios.post('http://localhost:5000/videos/upload',formData)
    .then(success=>{
        alert("Video submitted successfully");
    })
    .catch(err=>{
        console.log(err);
        alert("Error happened");
    })
}



    return (
        <div className="w-full px-10">
            <SectionTitle heading="Add Video"></SectionTitle>
            <form onSubmit={handleSubmit}>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                        <span className="label-text font-semibold">Video Name</span>

                    </label> 
                    <input type="text" name='name' id ='name' onChange={(e)=> setName(e.target.value)} className="input input-bordered w-full max-w-xs" /> 

                </div>
                {/* <div className="form-control w-full max-w-xs mb-36">
                    <label className="label">
                        <span className="label-text">Category*</span>
                    </label>
                    <select className="select select-bordered bg">
                        <option disabled selected>Pick one</option>
                        <option>COMPUTER AND INFORMATION TECHNOLOGY</option>
                        <option>BUSINESS STATISTICS</option>
                        <option>BUSINESS COMMUNICATION</option>
                        <option>BUSINESS MATHEMATICS</option>
                        <option>MICRO ECONOMICS</option>
                        <option>TAXATION IN BANGLADESH</option>
                        <option>INTERMEDIATE ACCOUNTING</option>
                    </select>

                </div> */}


                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Choose Video</span>
                    </label>
                    <input type="file"  name="videos" id ="videos" multiple accept=".mp4,.mkv" onChange={(e)=>{
                        setVideos(e.target.files);
                    }} className="file-input file-input-bordered w-full max-w-xs" />
                    
                </div>
                <button type="submit"  className="btn btn-primary mt-2">Upload Video</button>
            </form>
        </div>
    );
};

export default UserPayment;