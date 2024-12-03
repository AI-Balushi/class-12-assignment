import React from 'react';

const Hero = () => {
  return (
    <div className="flex justify-between items-center w-full px-8 py-16 bg-[#043873] text-white">
      {/* Left Content */}
      <div className="w-[40%] flex flex-col gap-6">
        <h1 className="font-inter text-[48px] font-bold leading-[60px] tracking-[-0.02em]">
          Get More Done with Whitepace
        </h1>
        <p className="font-inter text-[16
        
        px] font-medium leading-[20px] tracking-[-0.02em]">
          Project management software that enables your teams to collaborate, plan, analyze, and manage everyday tasks
        </p>
        {/* Button */}
        <button
          className="w-[200px] h-[50px] px-4 py-2 bg-[#4F9CF9] text-white font-inter text-[16px] font-medium leading-[20px] tracking-[-0.02em] rounded-md shadow-md hover:bg-[#357ACF] transition duration-200"
        >
          Try Whitepace free
        </button>
      </div>

      {/* Right Image Container */}
      <div className="w-[50%] h-[400px] bg-[#C4DEFD] flex justify-center items-center">
        <img
          src="/assets/Image-container.png"
          alt="Image Container"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
