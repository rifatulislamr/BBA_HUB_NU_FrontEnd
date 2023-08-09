import { Helmet } from "react-helmet-async";
import Testimonials from "../../Home/Testimonials/Testimonials";



const Secret = () => {
    return (
    <>
    <Helmet>
                <title>BBA HUB | Classes </title>
            </Helmet>
      <h1>this is secret video tutorial page</h1>
      <Testimonials></Testimonials>
    </>
        
    );
};

export default Secret;