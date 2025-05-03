"use client";

import { useState } from "react";
import Image from "next/image";

const Hero = () => {
  const [activeImage, setSctiveImage] = useState(1);

  return (
    <div className="w-full relative">
      <div className="w-full flex items-center justify-center px-[clamp(10px,3.6041667vw,200px)] top-0 z-10">
        <div className="w-full flex justify-between items-center">
          {/* hero background */}
          {[0, 1, 2].map((index) => (
            <div key={index} className="w-full absolute top-0 left-0 right-0 bottom-0 z-0">
              <Image
                fill
                src={`/images/home/banner${index}.png`}
                className={`w-full h-full transition-all duration-[1s] object-cover`}
                style={{
                  opacity: index !== activeImage ? "0%" : "100%",
                }}
                alt="banner"
              />
            </div>
          ))}

          {/* hero title and search */}
          <div className="flex flex-col py-5 justify-start gap-[clamp(10px,3.75vw,200px)] mt-[clamp(100px,12.021vw,250px)] items-start relative z-[1]">
            <div className="justify-center uppercase ms-[clamp(10px,4.73958vw,150px)] text-white text-[clamp(20px,6.6666667vw,250px)] font-bold font-['Cinzel'] leading-[clamp(20px,6.6666667vw,250px)] tracking-tight">
              Looking
              <br />
              for a new
              <br />
              house?
            </div>
            {/*  search */}
            <div className="w-[clamp(220px,41.666667vw,1500px)] px-[clamp(10px,2.5vw,100px)] py-[clamp(10px,1.25vw,30px)] bg-white rounded-[clamp(10px,2.6047vw,150px)] shadow-[0px_4px_4px_0px_rgba(47,62,70,0.20)] inline-flex justify-start items-center gap-[clamp(5px,1.25vw,35px)]">
              <input
                type="text"
                placeholder="Search about projects"
                className="w-full outline-none text-dark-gray text-[clamp(8px,1.0416vw,40px)] font-bold font-['Lato'] capitalize tracking-wide"
              />
              <button
                className="w-6 h-6 relative overflow-hidden cursor-pointer"
                aria-label="Filter"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.00457 6H17.0046L11.9946 12.3L7.00457 6ZM4.25457 5.61C6.27457 8.2 10.0046 13 10.0046 13V19C10.0046 19.55 10.4546 20 11.0046 20H13.0046C13.5546 20 14.0046 19.55 14.0046 19V13C14.0046 13 17.7246 8.2 19.7446 5.61C20.2546 4.95 19.7846 4 18.9546 4H5.04457C4.21457 4 3.74457 4.95 4.25457 5.61Z"
                    fill="#035B8D"
                  />
                </svg>
              </button>
              <button
                className="w-6 h-6 relative overflow-hidden cursor-pointer"
                aria-label="Search"
                type="submit"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.7549 14.2549H14.9649L14.6849 13.9849C15.6649 12.8449 16.2549 11.3649 16.2549 9.75488C16.2549 6.16488 13.3449 3.25488 9.75488 3.25488C6.16488 3.25488 3.25488 6.16488 3.25488 9.75488C3.25488 13.3449 6.16488 16.2549 9.75488 16.2549C11.3649 16.2549 12.8449 15.6649 13.9849 14.6849L14.2549 14.9649V15.7549L19.2549 20.7449L20.7449 19.2549L15.7549 14.2549ZM9.75488 14.2549C7.26488 14.2549 5.25488 12.2449 5.25488 9.75488C5.25488 7.26488 7.26488 5.25488 9.75488 5.25488C12.2449 5.25488 14.2549 7.26488 14.2549 9.75488C14.2549 12.2449 12.2449 14.2549 9.75488 14.2549Z"
                    fill="#494D50"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* catigories description */}
          <div className="w-[clamp(20px,26.0416668vw,1000px)]  inline-flex flex-col justify-center items-center gap-[clamp(10px,1.25vw,100px)] relative z-[1]">
            {[0, 1, 2].map((i) => (
              <div
                className={`transition-all duration-[1s]
               ${
                 activeImage === 0
                   ? "-translate-y-[clamp(50px,9.89582vw,500px)] "
                   : activeImage === 1
                   ? "translate-y-0"
                   : "translate-y-[clamp(50px,9.89582vw,500px)]"
               }`}
                key={i}
              >
                {activeImage === i && (
                  <div className="flex justify-start items-stretch relative gap-[10px]">
                    <div className="w-0 origin-top-left outline-2 outline-offset-[-1px] outline-white"></div>
                    <div className="inline-flex relative z-[0] text-white flex-col justify-start items-start gap-2">
                      <div className="self-stretch justify-center text-[clamp(5px,3.125vw,200px)] font-bold font-['Cinzel'] leading-[clamp(5px,3.28125vw,100px)] tracking-tight">
                        UNI 1
                      </div>
                      <div className="self-stretch justify-center text-[clamp(2px,1.0416vw,100px)] font-bold font-['Lato'] capitalize leading-[clamp(5px,2.08333vw,100px)] tracking-wide">
                        UNI Project Series A Group Of UNI Projects Has Been
                        Implemented, Which Adds a New and Distinctive Look To
                        The Real Estate Development Market.{" "}
                      </div>
                    </div>

                    <div className="h-[10px] flex items-center justify-center w-[clamp(10px,7vw,200px)]  overflow-hidden -me-[clamp(10px,3vw,200px))] origin-top-left absolute end-0 top-1/2 z-10 ">
                      <div className="border-t-1 border-white w-full h-full animateHerLine"></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* catigories images */}
          <div className="w-[calc(1.6*clamp(50px,8.33332vw,300px))] inline-flex flex-col justify-center items-center gap-[clamp(10px,1.25vw,100px)] relative z-[1]">
            {[
              `/images/home/banner0.png`,
              `/images/home/banner1.png`,
              `/images/home/banner2.png`,
            ].map((image, index) => (
              <div key={index}>
                <div
                  onClick={() => setSctiveImage(index)}
                  className={`self-stretch transition-all duration-[1s] relative z-[3] ${
                    index === activeImage
                      ? "h-[calc(1.6*clamp(50px,8.33332vw,300px))] w-[calc(1.6*clamp(50px,8.33332vw,300px))]"
                      : "h-[clamp(50px,8.33332vw,300px)] w-[clamp(50px,8.33332vw,300px)]"
                  }  rounded-full border border-white`}
                >
                  <img className="w-full h-full rounded-full" src={image} />
                </div>
              </div>
            ))}

            {/* absolute animated circles  */}

            <div
              className={`absolute mt-[clamp(10px,2.6047vw,150px)] ms-[clamp(10px,2.6047vw,150px)] z-[2] transition-all duration-[1s] ${
                activeImage === 0
                  ? "-translate-y-[clamp(50px,9.89582vw,500px)] "
                  : activeImage === 1
                  ? "translate-y-0"
                  : "translate-y-[clamp(50px,9.89582vw,500px)]"
              } `}
            >
              <div className="w-[clamp(10px,16.302082vw,500px)] h-[clamp(10px,16.302082vw,500px)] bg-white opacity-[.1] rounded-full" />
            </div>
            <div
              className={`absolute -mt-[clamp(10px,2.6047vw,150px)] -ms-[clamp(10px,2.6047vw,150px)] z-[2] transition-all duration-[1s] ${
                activeImage === 0
                  ? "-translate-y-[clamp(50px,9.89582vw,500px)] "
                  : activeImage === 1
                  ? "translate-y-0"
                  : "translate-y-[clamp(50px,9.89582vw,500px)]"
              } `}
            >
              <div className="w-[clamp(10px,16.302082vw,500px)] h-[clamp(10px,16.302082vw,500px)] bg-white opacity-[.1] rounded-full" />
            </div>
            <div
              className={`absolute -mt-[clamp(10px,2.6047vw,150px)] -me-[clamp(10px,2.6047vw,150px)] z-[2] transition-all duration-[1s] ${
                activeImage === 0
                  ? "-translate-y-[clamp(50px,9.89582vw,500px)] "
                  : activeImage === 1
                  ? "translate-y-0"
                  : "translate-y-[clamp(50px,9.89582vw,500px)]"
              } `}
            >
              <div className="w-[clamp(10px,16.302082vw,500px)] h-[clamp(10px,16.302082vw,500px)] bg-white opacity-[.1] rounded-full" />
            </div>
            <div
              className={`absolute -mb-[clamp(10px,2.6047vw,150px)] -ms-[clamp(10px,2.6047vw,150px)] z-[2] transition-all duration-[1s] ${
                activeImage === 0
                  ? "-translate-y-[clamp(50px,9.89582vw,500px)] "
                  : activeImage === 1
                  ? "translate-y-0"
                  : "translate-y-[clamp(50px,9.89582vw,500px)]"
              } `}
            >
              <div className="w-[clamp(10px,16.302082vw,500px)] h-[clamp(10px,16.302082vw,500px)] bg-white opacity-[.1] rounded-full" />
            </div>
            <div
              className={`absolute -mt-[clamp(20px,4.6875vw,200px)] -ms-[clamp(10px,2.6047vw,150px)] z-[2] transition-all duration-[1s] ${
                activeImage === 0
                  ? "-translate-y-[clamp(50px,9.89582vw,500px)] "
                  : activeImage === 1
                  ? "translate-y-0"
                  : "translate-y-[clamp(50px,9.89582vw,500px)]"
              } `}
            >
              <div className="w-[clamp(10px,16.302082vw,500px)] h-[clamp(10px,16.302082vw,500px)] bg-white opacity-[.1] rounded-full" />
            </div>
            <div
              className={`absolute -mt-[clamp(20px,4.6875vw,200px)] -me-[clamp(10px,2.6047vw,150px)] z-[2] transition-all duration-[1s] ${
                activeImage === 0
                  ? "-translate-y-[clamp(50px,9.89582vw,500px)] "
                  : activeImage === 1
                  ? "translate-y-0"
                  : "translate-y-[clamp(50px,9.89582vw,500px)]"
              } `}
            >
              <div className="w-[clamp(10px,16.302082vw,500px)] h-[clamp(10px,16.302082vw,500px)] bg-white opacity-[.1] rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
