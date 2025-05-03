import { Link } from "@/i18n/routing";
import { ProjectType } from "@/libs/types/types";
import Image from "next/image";

const ProjectCard = ({ project }: { project?: ProjectType }) => {
  return (
    <div className="w-full max-w-[480px] h-auto relative shadow-[1px_1px_10px_0px_rgba(191,191,191,0.50)] overflow-hidden">
      <div className="w-full h-full relative">
        {/* Project Image */}
        <div className="relative w-full aspect-[2/1]">
          <Image
            src="https://placehold.co/480x240"
            alt={project?.title || "Axiom Tower"}
            fill
            className="object-cover "
          />
        </div>

        <div className="w-full relative bg-white p-6">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
              <div className="text-[#060B0E] text-2xl md:text-4xl font-bold font-['Lato'] leading-tight tracking-tight mb-4">
                Axiom Tower
              </div>
              <div className="text-dark-gray text-sm font-normal text-[#494D50] font-['Lato'] leading-normal tracking-tight mb-6">
                New Administrative Capital - Downtown Plot NO. MU5-39, Area
                3275m².&quot; (Commercial - Medical - Offices) Consists Of 15
                Mixed-Used Floors....
              </div>
              <div className="flex items-center gap-1 mt-4">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.99935 7.99967C7.26602 7.99967 6.66602 7.39967 6.66602 6.66634C6.66602 5.93301 7.26602 5.33301 7.99935 5.33301C8.73268 5.33301 9.33268 5.93301 9.33268 6.66634C9.33268 7.39967 8.73268 7.99967 7.99935 7.99967ZM11.9993 6.79967C11.9993 4.37967 10.2327 2.66634 7.99935 2.66634C5.76602 2.66634 3.99935 4.37967 3.99935 6.79967C3.99935 8.35967 5.29935 10.4263 7.99935 12.893C10.6993 10.4263 11.9993 8.35967 11.9993 6.79967ZM7.99935 1.33301C10.7993 1.33301 13.3327 3.47967 13.3327 6.79967C13.3327 9.01301 11.5527 11.633 7.99935 14.6663C4.44602 11.633 2.66602 9.01301 2.66602 6.79967C2.66602 3.47967 5.19935 1.33301 7.99935 1.33301Z"
                    fill="#035B8D"
                  />
                </svg>

                <div className="text-text-text-on-color text-[#060B0E] text-sm font-bold font-['Lato'] leading-normal tracking-wide">
                  New Administrative Capital
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 flex flex-col items-start md:items-end">
              <div className="flex flex-wrap gap-2 mb-6">
                <div className="px-2 bg-[#F1F3F3] rounded-[50px] inline-flex justify-center items-center">
                  <div className="text-center text-black text-xs font-normal font-['Lato'] capitalize leading-normal tracking-tight">
                    commercial
                  </div>
                </div>
                <div className="px-2 bg-[#F1F3F3] rounded-[50px] inline-flex justify-center items-center">
                  <div className="text-center text-black text-xs font-normal font-['Lato'] capitalize leading-normal tracking-tight">
                    medical
                  </div>
                </div>
              </div>

              <Link href={`projects/${project?.id}`} className="mt-auto">
                <div className="w-full bg-[#060B0E] md:w-48 h-12 p-2 bg-text-text-on-color rounded-lg outline-1 outline-offset-[-1px] outline-text-text-on-color inline-flex justify-center items-center gap-4">
                  <div className="text-center text-white justify-center text-text-text-on-color-2 text-base font-bold font-['Lato'] capitalize leading-none tracking-wide">
                    explore
                  </div>

                  <svg
                    width="22"
                    height="16"
                    viewBox="0 0 22 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.0364 0.928932L12.6221 2.34315L17.282 7.00298H0.891239V8.99702H17.282L12.6221 13.6569L14.0364 15.0711L21.1074 8L14.0364 0.928932Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
