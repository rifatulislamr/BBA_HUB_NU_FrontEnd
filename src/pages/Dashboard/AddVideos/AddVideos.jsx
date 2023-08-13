import SectionTitle from "../../../components/SectionTitle/SectionTitle";


const AddVideos = () => {
    return (
        <div className="w-full px-10">
            <SectionTitle heading="Add Video"></SectionTitle>
            <form>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-semibold">Input your name*</span>

                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />

                </div>
                <div className="form-control w-full max-w-xs mb-36">
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

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Choose Video</span>
                    </label>
                    <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
                    
                </div>
                <input className="btn btn-primary mt-2" type="submit" value="Add Video" />
            </form>
        </div>
    );
};

export default AddVideos;