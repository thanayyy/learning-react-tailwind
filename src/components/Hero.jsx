import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto bg-wallpaper">
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto sm:px-16 px-6 flex flex-row items-start gap-5`}
      >
        <div>
          <h1 className="heroHeadText">
            Hello, My name is | <br /><span className="text-[#FFB100]">Thanayut Porsom</span>
          </h1>
          <p className="heroSubText mt-2 text-white-100">
            I'm learning to be <br />
            Frontend Developer
          </p>
        </div>
      </div>
    </section>
  );
};
export default Hero;
