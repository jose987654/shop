import React from "react";

const Hero = () => {
  return (
    <div>
      <section id="home" className="bg">
        <div className="home flex items-center justify-center flex-col gap-6 h-[316px]">
          <div>
            <img src="/assets/images/furniture-logo.png" alt="Logo" />
          </div>
          <h2 className="text-5xl">Shop</h2>
          <div className="flex gap-6">
            <h4 className="text-base">Home</h4>
            <img src="/assets/images/left-arrow.png" alt="Left Arrow" />
            <p className="text-base">Shop</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
