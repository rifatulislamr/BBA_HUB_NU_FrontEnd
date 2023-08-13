const CourseDetails = ({item}) => {
    const {name, image,price} = item;
      return (
          <div>
              <div className="card w-96 bg-base-100 shadow-xl">
    <figure><img className="h-80 w-100 " src={image} alt="Shoes" /></figure>
    <p className="bg-slate-900 text-white absolute right-2  mr-4 mt-4 px-2 py-2 rounded-xl">$ {price}</p>
    <div className="card-body flex flex-col items-center text-center">
      <h2 className="card-title text-center">{name}</h2>
      
      <div className="card-actions">
      <button className="btn btn-outline border-0 border-b-4 mt-4 ">Purchase</button>
      </div>
    </div>
  </div>
          </div>
      );
  };
  
  export default CourseDetails;