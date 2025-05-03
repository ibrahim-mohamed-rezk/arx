import AboutHome from "@/components/home/AboutHome";
import Hero from "@/components/home/Hero";
import ShortsPage from "@/components/home/OurShorts";
import ProjectAndBlog from "@/components/home/ProjectAndBlog";
import Services from "@/components/home/Services";
import SupportersPage from "@/components/home/Supporters";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutHome />
      <ShortsPage/>
      <Services />
      <SupportersPage />
      <ProjectAndBlog />
          </div>
  );
}
