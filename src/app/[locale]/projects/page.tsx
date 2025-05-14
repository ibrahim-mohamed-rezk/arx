import herobg from "../../../../public/images/home/525ab7523c86871fbf6680382ffeb83b63451acc (1).jpg";
import HeroSection from "./components/Hero";
import ProjectCard from "./components/ProjectCard";
import { getData } from "@/libs/axios/server";
import { AxiosHeaders } from "axios";
import { ProjectType } from "@/libs/types/types";
import { getTranslations } from "next-intl/server";
const ProjectsPage = async ({
  params,
}: {
  params: Promise<{ locale: string }>;
}) => {
  const { locale } = await params;
  const t = await getTranslations("projects");

  const feachData = async () => {
    try {
      const response = await getData(
        "properties",
        {},
        new AxiosHeaders({
          lang: locale,
        })
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const projects = await feachData();

  return (
    <div className=" min-h-screen bg-white pb-20">
      {/* Hero Section with Search */}
      <HeroSection backgroundImage={herobg} />

      {/* Main Title */}
      <div className="w-full container mx-auto px-4 py-8 md:py-12 lg:py-16">
        <h2 className="text-[clamp(20px,2.083vw,40px)]  text-center capitalize font-[700] font-['Cinzel'] max-w-5xl mx-auto px-3y">
          {t("title")}
        </h2>
      </div>

      {/* Projects Grid */}
      <div className="w-full container mx-auto pb-20 overflow-hidden">
        <div className="flex gap-[clamp(10px,1.042vw,20px)] px-[10px] md:px-0 flex-wrap justify-center">
          {projects.map((project: ProjectType, index: number) => (
            <ProjectCard
              key={index}
              project={project}
              locale={locale}
            />
          ))}
        </div>
      </div>

      {/* Pagination */}
      {/* <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      /> */}
    </div>
  );
};

export default ProjectsPage;
