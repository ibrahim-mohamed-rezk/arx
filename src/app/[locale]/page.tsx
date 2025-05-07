import AboutHome from "@/components/home/AboutHome";
import Hero from "@/components/home/Hero";
import ShortsPage from "@/components/home/OurShorts";
import ProjectAndBlog from "@/components/home/ProjectAndBlog";
import Services from "@/components/home/Services";
import SupportersPage from "@/components/home/Supporters";
import { getData } from "@/libs/axios/server";
import { AxiosHeaders } from "axios";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const feachData = async () => {
    const { locale } = await params;
    try {
      const response = await getData(
        "home",
        {},
        new AxiosHeaders({
          lang: locale,
        })
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };

  const HomeData = await feachData();
  console.log(HomeData)
  return (
    <div>
      <Hero projects={HomeData.projects} />
      <AboutHome />
      <ShortsPage />
      <Services />
      <SupportersPage />
      <ProjectAndBlog />
    </div>
  );
}
