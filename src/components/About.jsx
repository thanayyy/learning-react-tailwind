import React from "react";
import { services } from "../data/exampleData";
const CardAbout = ({ items }) => {
  return (
    <div className="xs:w-[250px] max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          style={{ width: "100%", height: "200px" }}
          className="rounded-t-lg"
          src={items.image}
          alt=""
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {items.title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, dignissimos?
        </p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
        </a>
      </div>
    </div>
  );
};
const About = () => {
  return (
    <div className="about-head">
      <div className="sectionSubText">Introduction</div>
      <h2 className="sectionHeadText">Overview</h2>
      <div className="about-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ullam
        maxime eaque aperiam, voluptate, dolorum eum recusandae totam officia et
        exercitationem libero magnam qui nostrum inventore id veniam ad
        eligendi.
      </div>
      <div className="mt-10 flex flex-wrap gap-10">
        {services.map((items, index) => {
          return <CardAbout items={items} key={index} />;
        })}
      </div>
    </div>
  );
};

export default About;
