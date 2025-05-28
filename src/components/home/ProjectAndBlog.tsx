// pages/ProjectAndBlog.tsx
"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import pm1 from "../../../public/images/home/PrimeMiniste1.png";
import pm2 from "../../../public/images/home/PrimeMiniste2.png";
import pm3 from "../../../public/images/home/PrimeMiniste3.png";
import { BlogType, ProjectType, TestimonialType } from "@/libs/types/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Link } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";

type Slide = {
  title: string;
  location?: string;
  image: StaticImageData;
};

const projectSlides: Slide[] = [
  { title: "O7 Mall – O7", location: "New Damietta", image: pm1 },
  { title: "Aura Mall", location: "New Damietta", image: pm2 },
  { title: "Metro Towers", location: "Cairo", image: pm3 },
];

const ProjectAndBlog = ({
  blogs,
  testimonials,
  projects,
}: {
  blogs: BlogType[];
  testimonials: TestimonialType[];
  projects: ProjectType[];
}) => {
  // Projects slider state
  const [projIdx, setProjIdx] = useState(0);
  const lastIdx = projectSlides.length - 1;
  const t = useTranslations("home");
  const locale = useLocale();

  const nextProj = () => setProjIdx((i) => (i === lastIdx ? 0 : i + 1));
  const prevProj = () => setProjIdx((i) => (i === 0 ? lastIdx : i - 1));

  return (
    <div className="space-y-24 py-12">
      {/* ---------------------------- */}
      {/* Our Latest Projects */}
      <section className="py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          {/* Left: Title + link (25% on lg) */}
          <div>
            <p className="text-4xl uppercase font-extrabold font-[Cinzel] text-gray-900">
              {t("our_latest")}
            </p>
            <h2 className="mt-2 text-4xl font-extrabold font-[Cinzel] text-gray-900">
              {t("projects")}
            </h2>
            <Link
              href="/projects"
              className="mt-4 items-center justify-center w-fit flex gap-1 text-[#035B8D] font-medium transition hover:text-[#E1A12B]"
            >
              {t("see_all_projects")}{" "}
              <svg
                className={`${locale === "ar" ? "mirror" : ""}`}
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.50008 3.21484L7.56008 4.15484L11.2801 7.88151H3.16675V9.21484H11.2801L7.56008 12.9415L8.50008 13.8815L13.8334 8.54818L8.50008 3.21484Z"
                  fill="#035B8D"
                />
              </svg>
            </Link>
          </div>

          {/* Slider (75% on lg) */}
          <div className="relative lg:col-span-3">
            <div className="flex overflow-hidden gap-6">
              {[
                projects[projIdx % projects.length],
                projects[(projIdx + 1) % projects.length],
              ].map((project, i) => (
                <Link
                  href={`/projects/${project.slug}`}
                  key={i}
                  className="flex-1 space-y-2"
                >
                  <div className="relative w-full h-72 rounded overflow-hidden">
                    <img
                      src={project.cover}
                      alt={project.title}
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-semibold">{project.title}</h3>
                  <p className="text-sm text-gray-500 gap-1 flex items-center">
                    <span className="inline-block w-4 h-4 mr-1 bg-gray-300 rounded-full" />
                    {project.location}
                  </p>
                </Link>
              ))}
            </div>

            {/* Next arrow → on the far LEFT */}
            <button
              onClick={nextProj}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#035B8D] hover:bg-[#E1A12B] rounded-full p-2 shadow transition"
            >
              <span className="sr-only">Next</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 4.293a1 1 0 011.414 1.414L5.414 9H15a1 1 0 110 2H5.414l3.293 3.293a1 1 0 01-1.414 1.414l-5-5a1 1 0 010-1.414l5-5z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {/* Prev arrow ← in the CENTER between slides */}
            <button
              onClick={prevProj}
              className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-100 hover:bg-gray-200 rounded-full p-2 shadow"
            >
              <span className="sr-only">Previous</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 15.707a1 1 0 01-1.414-1.414L14.586 11H5a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* ---------------------------- */}
      {/* Blog Section */}
      {/* ---------------------------- */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h3 className="text-center text-lg  uppercase font-bold text-[#035B8D] mb-2">
            {t("our_blog")}
          </h3>
          <h2
            className="mt-2 text-center font-[Cinzel] text-3xl md:text-4xl font-bold uppercase"
            dangerouslySetInnerHTML={{ __html: t("latest_news_feeds") }}
          />
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={3}
            loop
            navigation={{
              prevEl: ".blog-prev-button",
              nextEl: ".blog-next-button",
            }}
            pagination={{
              clickable: true,
              el: ".blog-pagination",
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
          >
            {blogs?.map((post: BlogType, index: number) => (
              <SwiperSlide key={index}>
                <Link
                  href={`/blogs/${post.slug}`}
                  className="rounded overflow-hidden"
                >
                  <div className="relative w-full h-48">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black/10 bg-opacity-50 p-4">
                      <p className="text-sm font-medium line-clamp-1 text-white">
                        {post.title}
                      </p>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="flex justify-center items-center mt-6 space-x-4">
            <button className="blog-prev-button absolute start-0 ms-[-15px] top-1/2 transform -translate-y-1/2 bg-[#D9D9D9] hover:bg-[#035B8D] rounded-full shadow p-2 z-10">
              <svg
                className="w-5 h-5 text-white"
                viewBox="0 0 18 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.70711 2.25545C8.09763 1.86492 8.09763 1.23176 7.70711 0.841233C7.31658 0.450709 6.68342 0.450709 6.29289 0.841233L0.292893 6.84123C-0.0976311 7.23176 -0.0976311 7.86492 0.292893 8.25545L6.29289 14.2554C6.68342 14.646 7.31658 14.646 7.70711 14.2554C8.09763 13.8649 8.09763 13.2318 7.70711 12.8412L3.41421 8.54834L17 8.54834C17.5523 8.54834 18 8.10063 18 7.54834C18 6.99606 17.5523 6.54834 17 6.54834L3.41421 6.54834L7.70711 2.25545Z"
                  fill="#fff"
                />
              </svg>
            </button>

            <button className="blog-next-button absolute end-0 me-[-15px] top-1/2 transform -translate-y-1/2 bg-[#D9D9D9] hover:bg-[#035B8D] rounded-full shadow p-2 z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 15.707a1 1 0 01-1.414-1.414L14.586 11H5a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* ---------------------------- */}
      {/* Testimonials Section */}
      {/* ---------------------------- */}
      <section className="container mx-auto px-4 mb-20 relative">
        <h2 className="text-center font-[Cinzel] text-3xl font-black mb-6">
          {t("trusted_by_clients")}
        </h2>
        <div className="max-w-xl mx-auto">
          {/* Left Navigation Button */}
          <button className="testimonial-prev-button absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#D9D9D9] hover:bg-[#035B8D] rounded-full shadow p-2 z-10">
            <svg
              className="w-5 h-5 text-white"
              viewBox="0 0 18 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.70711 2.25545C8.09763 1.86492 8.09763 1.23176 7.70711 0.841233C7.31658 0.450709 6.68342 0.450709 6.29289 0.841233L0.292893 6.84123C-0.0976311 7.23176 -0.0976311 7.86492 0.292893 8.25545L6.29289 14.2554C6.68342 14.646 7.31658 14.646 7.70711 14.2554C8.09763 13.8649 8.09763 13.2318 7.70711 12.8412L3.41421 8.54834L17 8.54834C17.5523 8.54834 18 8.10063 18 7.54834C18 6.99606 17.5523 6.54834 17 6.54834L3.41421 6.54834L7.70711 2.25545Z"
                fill="#fff"
              />
            </svg>
          </button>

          {/* Right Navigation Button */}
          <button className="testimonial-next-button absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#D9D9D9] hover:bg-[#035B8D] rounded-full shadow p-2 z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 15.707a1 1 0 01-1.414-1.414L14.586 11H5a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: ".testimonial-prev-button",
              nextEl: ".testimonial-next-button",
            }}
            className="testimonial-swiper w-full"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={testimonial.id || index}>
                <div className="text-center space-y-4">
                  <p
                    className="italic text-gray-700"
                    dangerouslySetInnerHTML={{
                      __html: testimonial.description,
                    }}
                  />

                  <div className="flex items-center justify-center space-x-3">
                    {testimonial.image && (
                      <div className="w-12 h-12 rounded-full overflow-hidden">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    )}
                    <div>
                      <p className="font-semibold">
                        {testimonial.name}{" "}
                        <span className="text-sm text-gray-500">
                          — {testimonial.role}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default ProjectAndBlog;
