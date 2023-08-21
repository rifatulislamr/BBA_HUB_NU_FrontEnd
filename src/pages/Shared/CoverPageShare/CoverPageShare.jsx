// const CoverPageShare = ({img, title}) => {
//     return (
//         <div className="hero h-[600px]" style={{backgroundImage: `url(${img})`}}>
//   <div className="hero-overlay bg-opacity-60"></div>
//   <div className="hero-content text-center text-neutral-content">
//     <div className="max-w-md">
//       <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
     
     
//     </div>
//   </div>
// </div>
//     );
// };

// export default CoverPageShare;



const CoverPageShare = ({ img, title }) => {
  return (
      <div className="hero sm:h-[350px] md:h-[400px] lg:h-[500px]  relative" style={{ backgroundImage: `url(${img})` }}>
          <div className="hero-overlay bg-opacity-60 absolute inset-0"></div>
          <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md mx-auto">
                  <h1 className="mb-5 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold uppercase">{title}</h1>
                  {/* Additional content or components can be added here */}
              </div>
          </div>
      </div>
  );
};

export default CoverPageShare;

