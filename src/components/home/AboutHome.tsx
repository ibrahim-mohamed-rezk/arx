import React from "react";

const AboutHome = () => {
  return (
    <div className="w-full bg-white min-h-screen relative z-20 py-8 md:py-12">
      <div
        data-property-1="Frame 262"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-center items-center gap-6 md:gap-8 lg:gap-12"
      >
        {/* Image gallery - responsive layout */}
        <div className=" flex items-center justify-center p-5 w-full">
          <img className="w-full h-full object-cover" src="https://placehold.co/384x600" alt="about us" />
          <div>
            <img src="https://placehold.co/127x101" alt="logo" />
          </div>
        </div>
        
        {/* Content section */}
        <div className="w-full lg:w-[762px] flex flex-col justify-end items-start lg:items-end gap-6 md:gap-9">
          <div className="self-stretch flex flex-col justify-start items-start gap-6 md:gap-9">
            <div className="justify-start text-actions-primary text-2xl md:text-3xl font-bold font-['Lato'] uppercase leading-8 md:leading-10 tracking-tight">
              About us
            </div>
            <div className="w-full md:w-[750px] justify-start text-text-text-on-color text-3xl md:text-4xl lg:text-5xl font-bold font-['Cinzel'] leading-[40px] md:leading-[56px] tracking-tight">
              Redefining luxury real estate with 25+ years of excellence.
            </div>
            <div className="self-stretch flex flex-col md:flex-row justify-start items-start gap-8 md:gap-6">
              <div className="w-full md:w-60 flex flex-col justify-start items-start gap-4">
                <div className="w-14 h-14 relative overflow-hidden">
                  <div className="w-14 h-14 left-0 top-0 absolute bg-actions-primary" />
                  <div className="w-0.5 h-0.5 left-[3.74px] top-[24.31px] absolute bg-actions-primary" />
                  <div className="w-0.5 h-0.5 left-[3.74px] top-[37.41px] absolute bg-actions-primary" />
                  <div className="w-1.5 h-1.5 left-[7.48px] top-[28.99px] absolute bg-actions-primary" />
                  <div className="w-1.5 h-2.5 left-[18.71px] top-[27.12px] absolute bg-actions-primary" />
                  <div className="w-2 h-2.5 left-[33.67px] top-[3.74px] absolute bg-actions-primary" />
                  <div className="w-2 h-2.5 left-[43.02px] top-[3.74px] absolute bg-actions-primary" />
                  <div className="w-2 h-2.5 left-[33.67px] top-[14.96px] absolute bg-actions-primary" />
                  <div className="w-2 h-2.5 left-[43.02px] top-[14.96px] absolute bg-actions-primary" />
                  <div className="w-0.5 h-1 left-[26.19px] top-[11.22px] absolute bg-actions-primary" />
                  <div className="w-0.5 h-1 left-[22.45px] top-[11.22px] absolute bg-actions-primary" />
                  <div className="w-0.5 h-1 left-[18.71px] top-[11.22px] absolute bg-actions-primary" />
                  <div className="w-0.5 h-1 left-[26.19px] top-[47.70px] absolute bg-actions-primary" />
                  <div className="w-0.5 h-1 left-[22.45px] top-[47.70px] absolute bg-actions-primary" />
                  <div className="w-0.5 h-1 left-[18.71px] top-[47.70px] absolute bg-actions-primary" />
                </div>
                <div className="justify-start text-text-text-on-color text-xl font-bold font-['Lato'] capitalize leading-10 tracking-wide">
                  Vision
                </div>
                <div className="self-stretch justify-start text-text-text-primary-2 text-lg font-normal font-['Lato'] leading-loose tracking-wide">
                  Enhancing communities through innovative real estate projects,
                  blending creativity with advanced strategies for optimal
                  client investment.
                </div>
              </div>
              <div className="w-full md:w-60 flex flex-col justify-start items-start gap-4">
                <div className="w-14 h-14 relative overflow-hidden">
                  <div className="w-14 h-12 left-0 top-[3.87px] absolute bg-actions-primary" />
                </div>
                <div className="justify-start text-text-text-on-color text-xl font-bold font-['Lato'] capitalize leading-10 tracking-wide">
                  Mission
                </div>
                <div className="self-stretch justify-start text-text-text-primary-2 text-lg font-normal font-['Lato'] leading-loose tracking-wide">
                  We uphold core values that drive sustainable and sophisticated
                  urban development aligned with global standards.
                </div>
              </div>
              <div className="w-full md:w-60 flex flex-col justify-start items-start gap-4">
                <div className="w-14 h-14 relative">
                  <div className="w-14 h-14 left-0 top-0 absolute bg-actions-primary" />
                </div>
                <div className="self-stretch justify-start text-text-text-on-color text-xl font-bold font-['Lato'] capitalize leading-10 tracking-wide">
                  Values
                </div>
                <div className="self-stretch justify-start">
                  <span className="text-text-text-primary-2 text-xl font-bold font-['Lato'] capitalize leading-10 tracking-wide">
                    Transparency:{" "}
                  </span>
                  <span className="text-text-text-primary-2 text-lg font-normal font-['Lato'] leading-loose tracking-wide">
                    We uphold honesty and clarity in all our dealings.
                    <br />
                  </span>
                  <span className="text-text-text-primary-2 text-xl font-bold font-['Lato'] capitalize leading-10 tracking-wide">
                    Respect:
                  </span>
                  <span className="text-text-text-primary-2 text-lg font-normal font-['Lato'] leading-loose tracking-wide">
                    {" "}
                    We foster a culture of mutual respect and integrity.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-28 flex justify-start items-center gap-1 mt-4 md:mt-0">
            <div className="text-center justify-start text-text-text-secondary text-base font-bold font-['Lato'] capitalize leading-none tracking-wide">
              Learn More
            </div>
            <div data-property-1="arrow_forward" className="w-4 h-4 relative">
              <div
                data-style="Outlined"
                className="w-4 h-4 left-0 top-0 absolute overflow-hidden"
              >
                <div className="w-2.5 h-2.5 left-[2.67px] top-[2.67px] absolute bg-text-text-secondary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHome;
