"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { projects } from "@/app/data/ux-ui-projects";
import { Navigation } from "swiper/modules";
// import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";

export default function Projects() {
  return (
    <div className="max-w-[85rem]">
      {/* Tab Nav */}
      <nav
        className="max-w-6xl mx-auto grid sm:flex gap-y-4 sm:gap-y-0 sm:gap-x-4"
        aria-label="Tabs"
        role="tablist"
      >
        {projects.map((project, idx) => {
          const tab = `#tabs-with-card-${idx}`;
          return (
            <button
              key={idx}
              type="button"
              className={`${
                idx === 0 ? `active` : ""
              } bg-gray-200 dark:bg-gray-700 shadow-md hs-tab-active:bg-gray-100 hs-tab-active:hover:border-transparent w-full flex flex-col text-start hover:bg-gray-100 p-3 md:p-5 rounded-xl dark:hs-tab-active:bg-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600`}
              id={`tabs-with-card-item-${idx}`}
              data-hs-tab={tab}
              aria-controls={tab}
              role="tab"
            >
              <span className="hs-tab-active:text-blue-600 block font-semibold text-gray-800 dark:hs-tab-active:text-neutral-800  dark:text-gray-200">
                {project.title}
              </span>
              <span className="hidden lg:block mt-2 text-gray-800 dark:text-gray-200 hs-tab-active:dark:text-gray-700">
                {project.description}
              </span>
            </button>
          );
        })}
      </nav>
      {/* End Tab Nav */}
      {/* Tab Content */}
      <div className="mt-12 md:mt-16">
        {projects.map((product, idx) => {
          return (
            <div
              key={idx}
              role="tabpanel"
              id={`tabs-with-card-${idx}`}
              className={idx !== 0 ? "hidden" : ""}
              aria-labelledby={`tabs-with-card-item-${idx}`}
            >
              <Swiper
                navigation
                lazyPreloadPrevNext={10}
                spaceBetween={50}
                slidesPerView={1}
                modules={[Navigation]}
              >
                {product.resources.map((resource, idx) => (
                  <SwiperSlide key={idx}>
                    {/* Devices */}
                    <div className="max-w-[1140px] lg:pb-32 relative">
                      {/* Mobile Device */}
                      {resource.mobile && (
                        <figure className="hidden absolute bottom-0 start-0 z-[2] max-w-full w-60 h-auto mb-20 ms-20 lg:block">
                          <div className="p-1.5 bg-gray-100 rounded-3xl shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(45_55_75_/_20%),_0_2rem_4rem_-2rem_rgb(45_55_75_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(45_55_75_/_20%)] dark:bg-gray-700 dark:shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(0_0_0_/_20%),_0_2rem_4rem_-2rem_rgb(0_0_0_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(0_0_0_/_20%)]">
                            <img
                              className="max-w-full h-auto rounded-[1.25rem]"
                              src={resource.mobile}
                              alt="Image Description"
                            />
                          </div>
                        </figure>
                      )}
                      {/* End Mobile Device */}
                      {/* Browser Device */}
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
                            src={resource.desktop}
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
            </div>
          );
        })}
      </div>
      {/* End Tab Content */}
    </div>
  );
}
