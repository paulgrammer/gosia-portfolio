"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { projects } from "@/app/data/graphic-design-projects";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Projects() {
  return (
    <Swiper
      navigation
      lazyPreloadPrevNext={10}
      spaceBetween={50}
      slidesPerView={1}
      modules={[Navigation]}
    >
      {projects.map((project, idx) => (
        <SwiperSlide key={idx}>
          {/* Devices */}
          <div className="max-w-[1140px] lg:pb-32 relative">
            <figure className="ms-auto me-20 relative z-[1] max-w-full w-[50rem] h-auto rounded-b-lg shadow-[0_2.75rem_3.5rem_-2rem_rgb(45_55_75_/_20%),_0_0_5rem_-2rem_rgb(45_55_75_/_15%)] dark:shadow-[0_2.75rem_3.5rem_-2rem_rgb(0_0_0_/_20%),_0_0_5rem_-2rem_rgb(0_0_0_/_15%)]">
              <div className="relative flex items-center max-w-[50rem] bg-white border-b border-gray-100 rounded-t-lg py-2 px-24 dark:bg-gray-800 dark:border-gray-700">
                <div className="flex space-x-1 absolute top-2/4 start-4 -translate-y-1">
                  <span className="w-2 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                  <span className="w-2 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                  <span className="w-2 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                </div>
                <div className="flex justify-center items-center w-full h-full bg-gray-200 text-[.25rem] text-gray-800 rounded-sm sm:text-[.5rem] dark:bg-gray-700 dark:text-gray-200">
                  {typeof window !== "undefined"
                    ? window.location.hostname
                    : "localhost"}
                </div>
              </div>
              <div className="bg-gray-800 rounded-b-lg">
                <img
                  className="max-w-full h-auto rounded-b-lg"
                  src={project}
                  alt="Image Description"
                />
              </div>
            </figure>
            {/* End Browser Device */}
          </div>
          {/* End Devices */}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
