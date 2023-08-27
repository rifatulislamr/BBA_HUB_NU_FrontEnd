import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';



const Footer = () => {
  
   const [currentDateTime, setCurrentDateTime] = useState(new Date());

   useEffect(() => {
     
     const updateDateTime = () => {
       setCurrentDateTime(new Date());
     };
 
    
     const timer = setInterval(updateDateTime, 1000);

     return () => {
       clearInterval(timer);
     };
   }, []);
 
 
   const formattedDateTime = currentDateTime.toLocaleString('en-bd', {
     year: 'numeric',
     month: 'long',
     day: 'numeric',
     
   });

    return (
        <footer>
            <footer className="footer p-10 bg-base-300 text-base-content mt-5">
  <div>
    <span className="footer-title">Services</span> 
    <a className="link link-hover ">BBA NU</a> 
    <a className="link link-hover">BBA Degree</a> 
    {/* <a className="link link-hover">MS Office</a> 
    <a className="link link-hover">HSC ICT</a> */}
  </div> 
  <div>
    <span className="footer-title">Company</span> 
   <Link to='/about' className="link link-hover">About Us </Link>
    <a className="link link-hover">Contact Us</a> 
    
    
  </div> 
  <div>
  <span className="footer-title">Address</span> 
    {/* <h1>GEC circle, Sanmar office road:07 Bt Coaching Building </h1> */}
    <h2>Mobile: 01876980021</h2>
    <h3>Email: Rifatulislamcse45@gmail.com</h3>
    <span className="footer-title">Social Media</span> 
    <div className="grid grid-flow-col gap-4">
    <a href="https://www.facebook.com/profile.php?id=100092745547089" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
      <a href="https://www.youtube.com/@THEBBAHUB/shorts" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
      <a href="https://www.linkedin.com/feed/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path></svg></a>
     
    </div>
    
  </div>
  
             
</footer>
            
            <div className="p-4 footer-center bg-base-300 text-base-content bg-slate-900">
                    <div>
                        <p>Copyright © {formattedDateTime} - All right reserved by Koders OT </p>
                    </div>
                </div>
        </footer>
    );
};

export default Footer;




// import { Link } from "react-router-dom";
// import React, { useState, useEffect } from 'react';

// const Footer = () => {
//    // State to store the current date and time
//    const [currentDateTime, setCurrentDateTime] = useState(new Date());

//    useEffect(() => {
//      // Function to update the current date and time every second
//      const updateDateTime = () => {
//        setCurrentDateTime(new Date());
//      };
 
//      // Update the date and time every second
//      const timer = setInterval(updateDateTime, 1000);
 
//      // Clean up the interval when the component is unmounted
//      return () => {
//        clearInterval(timer);
//      };
//    }, []);
 
//    // Format the date and time as desired
//    const formattedDateTime = currentDateTime.toLocaleString('en-bd', {
//      year: 'numeric',
//      month: 'long',
//      day: 'numeric',
//    });

//     return (
//         <footer className="footer p-10 bg-base-300 text-base-content mt-5">
//             {/* Services section */}
//             <div>
//                 <span className="footer-title">Services</span> 
//                 <a className="link link-hover">BBA NU</a> 
//                 <a className="link link-hover">BBA Degree</a> 
//             </div>
            
//             {/* Company section */}
//             <div>
//                 <span className="footer-title">Company</span> 
//                 <Link to='/about' className="link link-hover">About Us</Link>
//                 <a className="link link-hover">Contact Us</a> 
//             </div> 
            
//             {/* Address and Social Media section */}
//             <div>
//                 <span className="footer-title">Address</span> 
//                 <h2>Mobile: 01876980021</h2>
//                 <h3>Email: Rifatulislamcse45@gmail.com</h3>
//                 <span className="footer-title">Social Media</span> 
//                 <div className="grid grid-flow-col gap-4">
//                     <a href="https://www.facebook.com/profile.php?id=100092745547089" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
//                     <a href="https://www.youtube.com/@THEBBAHUB/shorts" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
//                     <a href="https://www.linkedin.com/feed/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path></svg></a>
//                 </div>
//             </div>
            
//             {/* Copyright section */}
//             <div className="p-4 footer-center bg-slate-900 text-neutral-content">
//                 <div>
//                     <p>Copyright © {formattedDateTime} - All rights reserved by Koders OT</p>
//                 </div>
//             </div>
//         </footer>
//     );
// };

// export default Footer;
