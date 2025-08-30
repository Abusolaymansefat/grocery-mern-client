import React from 'react';
import image from '../../assets/images.jpg';

const About = () => {
  return (
    <section className="bg-[#a5e792] flex flex-col-reverse lg:flex-row items-end justify-center px-6 lg:px-24 py-16 lg:py-32 gap-12">
      
      {/* Left Text */}
      <div className="lg:w-1/2 flex flex-col justify-start items-start gap-6">
        <h2 className="text-3xl lg:text-5xl font-bold text-[#48B828] leading-tight">
          Special Discount For All <br className="hidden lg:block" />
          Grocery Products
        </h2>
        <p className="text-gray-800 text-base lg:text-lg">
          Turpis tincidunt id aliquet risus feugiat. Pretium vulputate sapien nec sagittis aliquam.
          Ac tortor vitae purus faucibus ornare suspendisse sed nisi. Amet risus nullam eget felis eget nunc lobortis mattis aliquam.
        </p>
        <button className="bg-[#48B828] text-white py-3 px-6 rounded-md hover:bg-[#2d8515] transition-all duration-300">
          Buy Now
        </button>
      </div>

      {/* Right Image */}
      <div className="lg:w-1/2 flex justify-center lg:justify-end items-end">
        <img
          src={image}
          alt="Grocery"
          className="w-full max-w-md lg:max-w-lg h-auto rounded-4xl  shadow-2xl object-cover"
        />
      </div>
    </section>
  );
};

export default About;
