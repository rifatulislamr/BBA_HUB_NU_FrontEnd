// import SectionTitle from '../../../components/SectionTitle/SectionTitle';

// const FAQ = () => {
//     return (
//         <div>
//             <SectionTitle

//                 heading='frequently asked question'
//             ></SectionTitle>
//             <div className="collapse bg-base-200">
//                 <input type="checkbox" />
//                 <div className="collapse-title text-xl font-medium text-green-400 uppercase text-center">
//                   how to Login?
//                 </div>
//                 <div className="collapse-content text-gray-300">
//                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ab aspernatur eligendi, quam suscipit quasi id ipsam saepe corporis cupiditate quae animi ipsum qui in? Commodi distinctio quos voluptatibus tempore similique perferendis. Ex error ullam exercitationem blanditiis! Rerum ex, laudantium modi ullam beatae id fugiat ut ad obcaecati nisi corporis non dignissimos consequatur ab adipisci! Sapiente hic explicabo debitis possimus totam, minus ratione ut, nisi, quod soluta doloribus magni quam. Rerum libero labore neque mollitia suscipit vitae reiciendis impedit, ratione fugiat officia ea cumque culpa sed ipsum sint eveniet, enim adipisci. Doloribus vel eos ipsa ullam vero veniam iure corporis?</p>
//                 </div>
//             </div>
//             <div className="collapse bg-base-200">
//                 <input type="checkbox" />
//                 <div className="collapse-title text-xl font-medium text-green-400 uppercase text-center">
//                     BBAHUB for?
//                 </div>
//                 <div className="collapse-content text-gray-300">
//                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ab aspernatur eligendi, quam suscipit quasi id ipsam saepe corporis cupiditate quae animi ipsum qui in? Commodi distinctio quos voluptatibus tempore similique perferendis. Ex error ullam exercitationem blanditiis! Rerum ex, laudantium modi ullam beatae id fugiat ut ad obcaecati nisi corporis non dignissimos consequatur ab adipisci! Sapiente hic explicabo debitis possimus totam, minus ratione ut, nisi, quod soluta doloribus magni quam. Rerum libero labore neque mollitia suscipit vitae reiciendis impedit, ratione fugiat officia ea cumque culpa sed ipsum sint eveniet, enim adipisci. Doloribus vel eos ipsa ullam vero veniam iure corporis?</p>
//                 </div>
//             </div>
//             <div className="collapse bg-base-200">
//                 <input type="checkbox" />
//                 <div className="collapse-title text-xl font-medium text-green-400 uppercase text-center">
//                     Payment method 
//                 </div>
//                 <div className="collapse-content text-gray-300">
//                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ab aspernatur eligendi, quam suscipit quasi id ipsam saepe corporis cupiditate quae animi ipsum qui in? Commodi distinctio quos voluptatibus tempore similique perferendis. Ex error ullam exercitationem blanditiis! Rerum ex, laudantium modi ullam beatae id fugiat ut ad obcaecati nisi corporis non dignissimos consequatur ab adipisci! Sapiente hic explicabo debitis possimus totam, minus ratione ut, nisi, quod soluta doloribus magni quam. Rerum libero labore neque mollitia suscipit vitae reiciendis impedit, ratione fugiat officia ea cumque culpa sed ipsum sint eveniet, enim adipisci. Doloribus vel eos ipsa ullam vero veniam iure corporis?</p>
//                 </div>
//             </div>
            
//         </div>
//     );
// };

// export default FAQ;


import React, { useState } from 'react';  // Import React and useState
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);  // State to track active accordion item

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);  // Toggle active accordion item
    };

    return (
        <div>
            <SectionTitle
                heading='frequently asked question'
            ></SectionTitle>
            {/* Repeat this block for each FAQ item */}
            <div className="collapse bg-base-200">
                <input type="checkbox" checked={activeIndex === 0} onChange={() => toggleAccordion(0)} />
                <div className="collapse-title text-xl font-medium text-green-400 uppercase text-center">
                    how to Login? আমি কিভাবে লগইন করব?
                </div>
                {/* Use className based on activeIndex to show/hide content */}
                <div className={`collapse-content text-gray-300 ${activeIndex === 0 ? 'open' : 'closed'}`}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nihil velit nesciunt iure itaque, vitae, officia minima ullam fuga placeat illum culpa eum autem tempore beatae earum, magni explicabo. Odio, necessitatibus consequatur libero molestiae laborum accusamus quisquam. Ratione odit nihil, officia suscipit eligendi debitis facilis rerum, id ut soluta saepe.</p>
                </div>
            </div>
            {/* Repeat similar block for other FAQ items */}
            <div className="collapse bg-base-200">
                <input type="checkbox" checked={activeIndex === 1} onChange={() => toggleAccordion(1)} />
                <div className="collapse-title text-xl font-medium text-green-400 uppercase text-center">
                    BBAHUB for?
                </div>
                <div className={`collapse-content text-gray-300 ${activeIndex === 1 ? 'open' : 'closed'}`}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nihil velit nesciunt iure itaque, vitae, officia minima ullam fuga placeat illum culpa eum autem tempore beatae earum, magni explicabo. Odio, necessitatibus consequatur libero molestiae laborum accusamus quisquam. Ratione odit nihil, officia suscipit eligendi debitis facilis rerum, id ut soluta saepe.</p>
                </div>
            </div>
            {/* Repeat similar block for other FAQ items */}
            <div className="collapse bg-base-200">
                <input type="checkbox" checked={activeIndex === 2} onChange={() => toggleAccordion(2)} />
                <div className="collapse-title text-xl font-medium text-green-400 uppercase text-center">
                    How to Payment?
                </div>
                <div className={`collapse-content text-gray-300 ${activeIndex === 2 ? 'open' : 'closed'}`}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nihil velit nesciunt iure itaque, vitae, officia minima ullam fuga placeat illum culpa eum autem tempore beatae earum, magni explicabo. Odio, necessitatibus consequatur libero molestiae laborum accusamus quisquam. Ratione odit nihil, officia suscipit eligendi debitis facilis rerum, id ut soluta saepe.</p>
                </div>
            </div>
            <div className="collapse bg-base-200">
                <input type="checkbox" checked={activeIndex === 3} onChange={() => toggleAccordion(3)} />
                <div className="collapse-title text-xl font-medium text-green-400 uppercase text-center">
                    How to contact teacher?
                </div>
                <div className={`collapse-content text-gray-300 ${activeIndex === 2 ? 'open' : 'closed'}`}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nihil velit nesciunt iure itaque, vitae, officia minima ullam fuga placeat illum culpa eum autem tempore beatae earum, magni explicabo. Odio, necessitatibus consequatur libero molestiae laborum accusamus quisquam. Ratione odit nihil, officia suscipit eligendi debitis facilis rerum, id ut soluta saepe.</p>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
