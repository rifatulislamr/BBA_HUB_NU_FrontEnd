import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";

const AddVideos = () => {
    const { user } = useContext(AuthContext);
    const [userEmail,setUserEmail] = useState({});
    const [name, setName] = useState("");
    const [videos, setVideos] = useState([]);
    const [category, setCategory] = useState("");

useEffect(()=> {
    setUserEmail(user.email);
  
},[user])


    const handleSubmit = (e) => {
        e.preventDefault();

        let formData = new FormData();
        for (let key in videos) {
            formData.append("videos", videos[key]);
        }
        console.log(userEmail);
        formData.append("name", name);
        formData.append("category", category);
        formData.append("user",userEmail);

        axios.post('http://localhost:5000/videos/upload', formData)
            .then(success => {
                // alert("Video submitted successfully");
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `Video submitted successfully `,
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(err => {
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
                    <input type="text" name='name' id='name' onChange={(e) => setName(e.target.value)} className="input input-bordered w-full max-w-xs" />

                </div>
                <div className="form-control w-full max-w-xs mb-36">
                    <label className="label">
                        <span className="label-text">Category*</span>
                    </label>
                    <select
                        className="select select-bordered bg"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option disabled value="">Pick one</option>
                        <option value="cait">COMPUTER AND INFORMATION TECHNOLOGY</option>
                        <option value="bs">BUSINESS STATISTICS</option>
                        <option value="me">MICRO ECONOMICS</option>
                        <option value="bc">BUSINESS COMMUNICATION</option>
                        <option value="tib">TAXATION IN BANGLADESH</option>
                        <option value="bm">BUSINESS MATHEMATICS</option>
                        <option value="ia">INTERMEDIATE ACCOUNTING</option>

                    </select>
                </div>


                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Choose Video</span>
                    </label>
                    <input type="file" name="videos" id="videos" multiple accept=".mp4,.mkv" onChange={(e) => {
                        setVideos(e.target.files);
                    }} className="file-input file-input-bordered w-full max-w-xs" />

                </div>
                <button type="submit" className="btn btn-primary mt-2">Upload Video</button>
            </form>
        </div>
    );
};

export default AddVideos;