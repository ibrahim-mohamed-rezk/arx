const Hero = () => {
  return (
    <div className="w-full h-screen relative ">
      <div className="w-full flex items-center justify-center px-[clamp(10px,2.6041667vw,200px)] fixed top-0 h-screen z-10">
        <div className="w-full flex justify-between items-center">
          {/* hero background */}
          <div className="w-full absolute top-0 left-0 right-0 bottom-0 h-screen z-0">
            <img
              src="/images/home/banner1.png"
              className="w-full h-full object-cover"
              alt="banner"
            />
          </div>

          {/* hero title and search */}
          <div className="flex flex-col justify-start gap-[clamp(10px,3.75vw,200px)] h-screen mt-[300px] items-start relative z-[1]">
            <div className="justify-center uppercase ms-[clamp(10px,4.73958vw,150px)] text-white text-[clamp(20px,6.6666667vw,250px)] font-bold font-['Cinzel'] leading-[clamp(20px,6.6666667vw,250px)] tracking-tight">
              Looking
              <br />
              for a new
              <br />
              house?
            </div>
            {/*  search */}
            <div className="w-[clamp(220px,41.666667vw,1500px)] px-[clamp(10px,2.5vw,100px)] py-[clamp(10px,1.25vw,30px)] bg-white rounded-[50px] shadow-[0px_4px_4px_0px_rgba(47,62,70,0.20)] inline-flex justify-start items-center gap-[clamp(5px,1.25vw,35px)]">
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

          {/* catigories images */}
          <div className="w-[clamp(50px,8.33332vw,300px)] inline-flex flex-col justify-start items-start gap-[clamp(10px,1.25vw,100px)] relative z-[1]">
            <img
              className="self-stretch h-[clamp(50px,8.33332vw,300px)] rounded-full border border-white"
              src="https://placehold.co/160x160"
            />
            <img
              className="self-stretch h-[clamp(50px,8.33332vw,300px)] rounded-full border border-white"
              src="https://placehold.co/160x160"
            />
            <img
              className="self-stretch h-[clamp(50px,8.33332vw,300px)] rounded-full border border-white"
              src="https://placehold.co/160x160"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
