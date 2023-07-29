import React from 'react';



const CourseITem = ({item}) => {
    const {name, image,price} = item;
    return (
        
            <div className="flex space-x-2">
            <img style={{borderRadius: '15px'}} className="w-[150px]" src={image} alt="" />
          
           <div>
               <h3 className="uppercase text-2xl mt-10 font-bold  ">{name}</h3>
                {/* <p>{recipe}</p> */}
            </div>
           
            <p className="text-yellow-500 mt-10 text-2xl"> ৳{price}</p>
           
            
            </div>
           
       
            
    );
};

export default CourseITem;