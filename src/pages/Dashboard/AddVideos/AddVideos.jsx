import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";

const AddVideos = () => {
  const { user } = useContext(AuthContext);
  const [userEmail, setUserEmail] = useState({});
  const [name, setName] = useState("");
  const [videos, setVideos] = useState([]);
  const [courseName, setCourseName] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    setUserEmail(user.email);
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let formData = new FormData();
    for (let key in videos) {
      formData.append("videos", videos[key]);
    }
    console.log(userEmail);
    formData.append("name", name);
    formData.append("courseName", courseName);
    formData.append("category", category);
    formData.append("user", userEmail);

    axios
      .post("http://localhost:5000/videos/upload", formData)
      .then((success) => {
        // alert("Video submitted successfully");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Video submitted successfully `,
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        console.log(err);
        alert("Error happened");
      });
  };

  return (
    <div className="w-full px-10">
      <SectionTitle heading="Add Video"></SectionTitle>
      <form onSubmit={handleSubmit}>
        <div className="form-control w-full max-w-xs mb- mx-auto">
          <label className="label">
            <span className="label-text font-semibold">Video Name</span>
          </label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => setName(e.target.value)}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs mb-5 mx-auto">
          <label className="label">
            <span className="label-text">Course Name</span>
          </label>
          <select
            className="select select-bordered bg"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
          >
            <option disabled value="">
              Pick one
            </option>
            <option value="Computer and Information Technology">
              Computer and Information Technology
            </option>
            <option value="Business Statistics">Business Statistics</option>
            <option value="Micro Economics">Micro Economics</option>
            <option value="Business Communication">
              Business Communication
            </option>
            <option value="Taxation in Bangladesh">
              Taxation in Bangladesh
            </option>
            <option value="Business Mathematics">Business Mathematics</option>
            <option value="Intermediate Accounting">
              Intermediate Accounting
            </option>
          </select>
        </div>
        <div className="form-control w-full max-w-xs mb-5 mx-auto">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <select
            className="select select-bordered bg"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option disabled value="">
              Pick one
            </option>
            <option value="firstYearBba">First Year BBA</option>
            <option value="secondYearBba">Second Year BBA</option>
          </select>
        </div>

        <div className="form-control w-full max-w-xs mx-auto">
          <label className="label">
            <span className="label-text">Choose Video</span>
          </label>
          <input
            type="file"
            name="videos"
            id="videos"
            multiple
            accept=".mp4,.mkv"
            onChange={(e) => {
              setVideos(e.target.files);
            }}
            className="file-input file-input-bordered w-full max-w-xs"
          />
        </div>
        <div className="max-w-xs mx-auto mt-2">
          <button type="submit" className="btn btn-primary mt-2 ">
            Upload Video
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddVideos;
