import React, { useState } from "react"; // Import React and useState
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null); // State to track active accordion item

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle active accordion item
  };

  return (
    <div>
      <SectionTitle heading="frequently asked question"></SectionTitle>
      {/* Repeat this block for each FAQ item */}
      <div className="collapse bg-base-200">
        <input
          type="checkbox"
          checked={activeIndex === 0}
          onChange={() => toggleAccordion(0)}
        />
        <div className="collapse-title text-xl font-medium text-white-400 uppercase text-center shadow-xl rounded-full">
          how to Login?
        </div>
        {/* Use className based on activeIndex to show/hide content */}
        <div
          className={`collapse-content text-gray-300 mx-auto text-center   ${
            activeIndex === 0 ? "open" : "closed"
          }`}
        >
          <p className="text-black p-3 bg-gray-400 rounded-xl bg-opacity-75">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nihil
            velit nesciunt iure itaque, vitae, officia minima ullam fuga placeat
            illum culpa eum autem tempore beatae earum, magni explicabo. Odio,
            necessitatibus consequatur libero molestiae laborum accusamus
            quisquam. Ratione odit nihil, officia suscipit eligendi debitis
            facilis rerum, id ut soluta saepe.
          </p>
        </div>
      </div>
      {/* Repeat similar block for other FAQ items */}
      <div className="collapse bg-base-200">
        <input
          type="checkbox"
          checked={activeIndex === 1}
          onChange={() => toggleAccordion(1)}
        />
        <div className="collapse-title text-xl font-medium text-white-400 uppercase      text-center shadow-xl rounded-full">
          BBAHUB for?
        </div>
        <div
          className={`collapse-content text-gray-300 mx-auto text-center ${
            activeIndex === 1 ? "open" : "closed"
          }`}
        >
          <p className="text-black p-3 bg-gray-400 rounded-xl bg-opacity-75">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nihil
            velit nesciunt iure itaque, vitae, officia minima ullam fuga placeat
            illum culpa eum autem tempore beatae earum, magni explicabo. Odio,
            necessitatibus consequatur libero molestiae laborum accusamus
            quisquam. Ratione odit nihil, officia suscipit eligendi debitis
            facilis rerum, id ut soluta saepe.
          </p>
        </div>
      </div>
      {/* Repeat similar block for other FAQ items */}
      <div className="collapse bg-base-200">
        <input
          type="checkbox"
          checked={activeIndex === 2}
          onChange={() => toggleAccordion(2)}
        />
        <div className="collapse-title text-xl font-medium text-white-400 uppercase      text-center shadow-xl rounded-full">
          How to Payment?
        </div>
        <div
          className={`collapse-content text-gray-300 mx-auto text-center  ${
            activeIndex === 2 ? "open" : "closed"
          }`}
        >
          <p className="text-black p-3 bg-gray-400 rounded-xl bg-opacity-75">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nihil
            velit nesciunt iure itaque, vitae, officia minima ullam fuga placeat
            illum culpa eum autem tempore beatae earum, magni explicabo. Odio,
            necessitatibus consequatur libero molestiae laborum accusamus
            quisquam. Ratione odit nihil, officia suscipit eligendi debitis
            facilis rerum, id ut soluta saepe.
          </p>
        </div>
      </div>
      <div className="collapse bg-base-200">
        <input
          type="checkbox"
          checked={activeIndex === 3}
          onChange={() => toggleAccordion(3)}
        />
        <div className="collapse-title text-xl font-medium text-white-400 uppercase text-center shadow-xl rounded-full">
          How to contact teacher?
        </div>
        <div
          className={`collapse-content text-gray-300  mx-auto text-center  ${
            activeIndex === 2 ? "open" : "closed"
          }`}
        >
          <p className="text-black p-3 bg-gray-400 rounded-xl bg-opacity-75">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nihil
            velit nesciunt iure itaque, vitae, officia minima ullam fuga placeat
            illum culpa eum autem tempore beatae earum, magni explicabo. Odio,
            necessitatibus consequatur libero molestiae laborum accusamus
            quisquam. Ratione odit nihil, officia suscipit eligendi debitis
            facilis rerum, id ut soluta saepe.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
